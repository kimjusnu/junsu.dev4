import type { Locale, LocaleContent } from "@/lib/types";
import { ko } from "./ko";
import { en } from "./en";

export const localizedContent: Record<Locale, LocaleContent> = {
  ko,
  en,
};
