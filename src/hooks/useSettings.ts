import { useQuery } from "@tanstack/react-query";
import { settingsQuery, DEFAULT_SETTINGS } from "@/lib/cms/queries";
import type { Settings } from "@/lib/cms/types";

export function useSettings(): Settings {
  const { data } = useQuery(settingsQuery);
  return data ?? DEFAULT_SETTINGS;
}
