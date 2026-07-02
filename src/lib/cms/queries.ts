import { queryOptions } from "@tanstack/react-query";
import {
  fetchStatsSheet,
  fetchTestimonialsSheet,
  fetchLogosSheet,
  fetchCaseStudiesSheet,
  fetchSettingsSheet,
  fetchMediaSheet,
} from "./sheets.functions";
import type { Stat, Testimonial, ClientLogo, CaseStudy, Settings } from "./types";
import { PHONE, PHONE_TEL, WHATSAPP, EMAIL, BUSINESS_ADDRESS } from "@/lib/site-data";

const SIXTY = 60_000;

// --- Drive URL normalisation. ---
// Converts a Google Drive share URL to a directly embeddable image URL.
export function normalizeDriveImage(url: string, size = 1200): string {
  if (!url) return "";
  const m = url.match(/\/file\/d\/([^/?#]+)/) || url.match(/[?&]id=([^&]+)/);
  if (m) return `https://lh3.googleusercontent.com/d/${m[1]}=w${size}`;
  return url;
}

const isPublished = (v: string | undefined) =>
  (v ?? "").trim().toLowerCase() === "published";

export const FALLBACK_STATS: Stat[] = [
  { title: "Corporate Clients", value: "150+", icon: "users" },
  { title: "IT Assets Recovered", value: "18,500+", icon: "monitor" },
  { title: "E-Waste Processed", value: "520+ Tons", icon: "recycle" },
  { title: "Cities Served", value: "25+", icon: "map-pin" },
  { title: "Successful Projects", value: "850+", icon: "briefcase" },
  { title: "Enterprise Customers", value: "120+", icon: "building-2" },
  { title: "Average Response Time", value: "2 Hours", icon: "clock" },
  { title: "On-Time Collections", value: "99%", icon: "check-circle" },
];

export const statsQuery = queryOptions({
  queryKey: ["cms", "stats"],
  staleTime: SIXTY,
  placeholderData: FALLBACK_STATS,
  queryFn: async (): Promise<Stat[]> => {
    try {
      const rows = await fetchStatsSheet();
      const parsed = rows
        .map((r) => ({
          title: (r.title ?? "").trim(),
          value: (r.value ?? "").trim(),
          icon: (r.icon ?? "").trim().toLowerCase(),
        }))
        .filter((s) => s.title && s.value);
      return parsed.length > 0 ? parsed : FALLBACK_STATS;
    } catch (err) {
      console.error("[cms] statsQuery failed, using fallback:", err);
      return FALLBACK_STATS;
    }
  },
});

export const testimonialsQuery = queryOptions({
  queryKey: ["cms", "testimonials"],
  staleTime: SIXTY,
  queryFn: async (): Promise<Testimonial[]> => {
    const rows = await fetchTestimonialsSheet();
    return rows.filter((r) => isPublished(r.status)).map((r) => ({
      name: r.name ?? "",
      company: r.company ?? "",
      designation: r.designation ?? "",
      review: r.review ?? "",
      rating: Number(r.rating) || 0,
    }));
  },
});

export const logosQuery = queryOptions({
  queryKey: ["cms", "logos"],
  staleTime: SIXTY,
  queryFn: async (): Promise<ClientLogo[]> => {
    const rows = await fetchLogosSheet();
    return rows.filter((r) => isPublished(r.status)).map((r) => ({
      company: r.company ?? "",
      logo: normalizeDriveImage(r["logo url"] ?? r.logo ?? "", 400),
      website: (r["website url"] ?? r.website ?? "").trim() || undefined,
    }));
  },
});

export const caseStudiesQuery = queryOptions({
  queryKey: ["cms", "case-studies"],
  staleTime: SIXTY,
  queryFn: async (): Promise<CaseStudy[]> => {
    const rows = await fetchCaseStudiesSheet();
    return rows.filter((r) => isPublished(r.status)).map((r) => ({
      company: r.company ?? "",
      industry: r.industry ?? "",
      material: r.material ?? "",
      quantity: r.quantity ?? "",
      location: r.location ?? "",
      date: r.date ?? "",
      description: r.description ?? "",
      image: normalizeDriveImage(r.image ?? "", 1200),
    }));
  },
});

// --- Settings ---
function normalizePhoneTel(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, "");
  if (!digits) return "";
  return digits.startsWith("+") ? digits : `+${digits}`;
}
function normalizeEmail(raw: string): string {
  return raw.replace(/^mailto:/i, "").trim();
}

export const DEFAULT_SETTINGS: Settings = {
  phone: PHONE,
  phoneTel: PHONE_TEL,
  whatsapp: WHATSAPP,
  email: EMAIL,
  address: BUSINESS_ADDRESS,
};

export const settingsQuery = queryOptions({
  queryKey: ["cms", "settings"],
  staleTime: SIXTY,
  // Show hardcoded defaults instantly; hydrate with sheet values after fetch.
  placeholderData: DEFAULT_SETTINGS,
  queryFn: async (): Promise<Settings> => {
    const rows = await fetchSettingsSheet();
    const map: Record<string, string> = {};
    for (const r of rows) {
      const k = (r.key ?? "").trim().toLowerCase();
      const v = (r.value ?? "").trim();
      if (k) map[k] = v;
    }
    const phoneTel = normalizePhoneTel(map.phone ?? "") || DEFAULT_SETTINGS.phoneTel;
    const whatsapp = (map.whatsapp ?? "").replace(/[^\d]/g, "") || DEFAULT_SETTINGS.whatsapp;
    return {
      phone: map.phone || DEFAULT_SETTINGS.phone,
      phoneTel,
      whatsapp,
      email: normalizeEmail(map.email ?? "") || DEFAULT_SETTINGS.email,
      address: map.address || DEFAULT_SETTINGS.address,
    };
  },
});

// --- Media (hero video, etc.) ---
export const FALLBACK_HERO_VIDEO =
  "https://res.cloudinary.com/uuo2xujh/video/upload/v1782981597/242599_1_auiumq.mp4";

export const mediaQuery = queryOptions({
  queryKey: ["cms", "media"],
  staleTime: SIXTY,
  placeholderData: { hero_video: FALLBACK_HERO_VIDEO } as Record<string, string>,
  queryFn: async (): Promise<Record<string, string>> => {
    try {
      const rows = await fetchMediaSheet();
      const map: Record<string, string> = {};
      for (const r of rows) {
        const key = (r.key ?? "").trim().toLowerCase();
        const url = (r.url ?? "").trim();
        if (key && url && isPublished(r.status)) map[key] = url;
      }
      if (!map.hero_video) map.hero_video = FALLBACK_HERO_VIDEO;
      return map;
    } catch (err) {
      console.error("[cms] mediaQuery failed, using fallback:", err);
      return { hero_video: FALLBACK_HERO_VIDEO };
    }
  },
});
