import { createServerFn } from "@tanstack/react-start";

const SHEET_IDS = {
  stats: "1BeZksTGrO9zWm-hanRPzkn1TDiPy6D4ND369traHmno",
  testimonials: "1MlZ6mAghZGqHvuuC4RvGWKF2Nf4iop-6pwglDZgCaCw",
  logos: "1eQjjKWGDGTIx_-u1XnHXZWvtzet8uKWUu29gHLydrjk",
  caseStudies: "1MHriJcpxIzyijP7N-N3nSSbuFP2gmVgYiIQ-jaCHoNk",
  settings: "1AId-4fQgDvzeSzwk2ctWvD7RbSaN19DFa70i3OMi2UY",
  media: "1fFh8zHKeE-Q7JNg7DlX4qfjRC_FbWM3lG7prBTHsZtI",
} as const;

type SheetKey = keyof typeof SHEET_IDS;

// Minimal CSV parser (RFC 4180 subset — handles quoted fields, escaped quotes, newlines in quotes).
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let i = 0;
  let inQuotes = false;
  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === '"') { inQuotes = true; i++; continue; }
    if (c === ",") { row.push(field); field = ""; i++; continue; }
    if (c === "\r") { i++; continue; }
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
    field += c; i++;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((v) => v.trim() !== ""));
}

function toObjects(rows: string[][]): Record<string, string>[] {
  if (rows.length === 0) return [];
  const headers = rows[0].map((h) => h.trim().toLowerCase());
  return rows.slice(1).map((r) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, idx) => { obj[h] = (r[idx] ?? "").trim(); });
    return obj;
  });
}

// In-memory cache (server-side). Keyed by sheet key. 60s TTL.
type CacheEntry = { at: number; data: Record<string, string>[] };
const cache = new Map<SheetKey, CacheEntry>();
const TTL_MS = 60_000;

async function fetchSheet(key: SheetKey): Promise<Record<string, string>[]> {
  const now = Date.now();
  const hit = cache.get(key);
  if (hit && now - hit.at < TTL_MS) return hit.data;
  // Use `export?format=csv` — the gviz endpoint sometimes collapses
  // multi-row sheets into a single row when the sheet has merged cells
  // or chart ranges, which broke stats rendering in production.
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_IDS[key]}/export?format=csv`;
  try {
    const res = await fetch(url, { redirect: "follow", headers: { accept: "text/csv" } });
    if (!res.ok) throw new Error(`sheet ${key} http ${res.status}`);
    const text = await res.text();
    const data = toObjects(parseCSV(text));
    cache.set(key, { at: now, data });
    return data;
  } catch (err) {
    console.error(`[cms] fetchSheet(${key}) failed:`, err);
    // Serve last-known-good on error.
    if (hit) return hit.data;
    throw err;
  }
}

export const fetchStatsSheet = createServerFn({ method: "GET" }).handler(async () =>
  fetchSheet("stats"),
);
export const fetchTestimonialsSheet = createServerFn({ method: "GET" }).handler(async () =>
  fetchSheet("testimonials"),
);
export const fetchLogosSheet = createServerFn({ method: "GET" }).handler(async () =>
  fetchSheet("logos"),
);
export const fetchCaseStudiesSheet = createServerFn({ method: "GET" }).handler(async () =>
  fetchSheet("caseStudies"),
);
export const fetchSettingsSheet = createServerFn({ method: "GET" }).handler(async () =>
  fetchSheet("settings"),
);
