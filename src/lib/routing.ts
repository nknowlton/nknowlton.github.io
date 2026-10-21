import { siteMeta, type Locale, type PageSlug } from "../data/site";
export const getLocalizedPath = (_locale: Locale, slug: PageSlug | "" = "") =>
  slug ? `/${slug}/` : "/";
export const getCanonicalUrl = (locale: Locale, slug: PageSlug | "" = "") =>
  new URL(getLocalizedPath(locale, slug), siteMeta.site).toString();
