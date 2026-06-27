import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const RECIPIENT_EMAIL = "ahmed.ewastebuyers@gmail.com";
const EMAIL_SUBJECT = "New Website Enquiry | eWasteBuyers.com";
const FROM_EMAIL = "E-Waste Buyers <noreply@ewastebuyers.com>";
const DUPLICATE_WINDOW_MS = 60_000;

type ResendModule = {
  Resend: new (apiKey: string) => {
    emails: {
      send: (payload: {
        from: string;
        to: string;
        replyTo: string;
        subject: string;
        html: string;
        text: string;
      }) => Promise<{ error?: unknown }>;
    };
  };
};

type DuplicateStore = Map<string, number>;

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  companyName: z.string().trim().min(2, "Company name is required").max(160),
  email: z.string().trim().email("A valid email is required").max(254),
  phoneNumber: z.string().trim().min(7, "Phone number is required").max(40),
  city: z.string().trim().max(120).optional().default(""),
  serviceRequired: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().max(2_000).optional().default(""),
});

function getDuplicateStore(): DuplicateStore {
  const globalForDuplicates = globalThis as typeof globalThis & {
    __contactSubmissionDuplicates?: DuplicateStore;
  };

  if (!globalForDuplicates.__contactSubmissionDuplicates) {
    globalForDuplicates.__contactSubmissionDuplicates = new Map();
  }

  return globalForDuplicates.__contactSubmissionDuplicates;
}

async function createSubmissionKey(value: z.infer<typeof contactSchema>) {
  const normalized = [
    value.email.toLowerCase(),
    value.phoneNumber.replace(/\D/g, ""),
    value.fullName.toLowerCase(),
    value.companyName.toLowerCase(),
    value.message.toLowerCase(),
  ].join("|");
  const bytes = new TextEncoder().encode(normalized);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function assertNotDuplicate(key: string) {
  const now = Date.now();
  const store = getDuplicateStore();

  for (const [storedKey, timestamp] of store) {
    if (now - timestamp > DUPLICATE_WINDOW_MS) {
      store.delete(storedKey);
    }
  }

  const previousSubmission = store.get(key);
  if (previousSubmission && now - previousSubmission < DUPLICATE_WINDOW_MS) {
    throw new Error("Duplicate submission detected. Please wait a moment before trying again.");
  }

  store.set(key, now);
}

function releaseDuplicateReservation(key: string) {
  getDuplicateStore().delete(key);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatValue(value: string) {
  return escapeHtml(value || "Not provided");
}

function buildEmailHtml(data: z.infer<typeof contactSchema>, submissionTime: string) {
  const rows = [
    ["Full Name", data.fullName],
    ["Company Name", data.companyName],
    ["Email", data.email],
    ["Phone Number", data.phoneNumber],
    ["City", data.city],
    ["Service Required", data.serviceRequired],
    ["Message", data.message],
    ["Submission Time", submissionTime],
  ];

  return `
    <h2>New Website Enquiry</h2>
    <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
      <tbody>
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #ddd; font-weight: 700; width: 180px; vertical-align: top;">${escapeHtml(label)}</td>
                <td style="border: 1px solid #ddd; white-space: pre-wrap;">${formatValue(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildEmailText(data: z.infer<typeof contactSchema>, submissionTime: string) {
  return [
    "New Website Enquiry",
    "",
    `Full Name: ${data.fullName}`,
    `Company Name: ${data.companyName}`,
    `Email: ${data.email}`,
    `Phone Number: ${data.phoneNumber}`,
    `City: ${data.city || "Not provided"}`,
    `Service Required: ${data.serviceRequired || "Not provided"}`,
    `Message: ${data.message || "Not provided"}`,
    `Submission Time: ${submissionTime}`,
  ].join("\n");
}

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      throw new Error("Email service is not configured. Please try again later.");
    }

    const submissionKey = await createSubmissionKey(data);
    assertNotDuplicate(submissionKey);

    const submissionTime = new Date().toISOString();

    try {
      const { Resend } = (await Function("return import('resend')")()) as ResendModule;
      const resend = new Resend(apiKey);
      const result = await resend.emails.send({
        from: FROM_EMAIL,
        to: RECIPIENT_EMAIL,
        replyTo: data.email,
        subject: EMAIL_SUBJECT,
        html: buildEmailHtml(data, submissionTime),
        text: buildEmailText(data, submissionTime),
      });

      if (result.error) {
        releaseDuplicateReservation(submissionKey);
        console.error("Resend email send failed", result.error);
        throw new Error("Unable to send enquiry right now. Please try again later.");
      }

      return { ok: true, submittedAt: submissionTime };
    } catch (error) {
      releaseDuplicateReservation(submissionKey);
      if (error instanceof Error && error.message.includes("Duplicate submission")) {
        throw error;
      }

      console.error("Contact enquiry submission failed", error);
      throw new Error("Unable to send enquiry right now. Please try again later.");
    }
  });
