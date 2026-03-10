import {
  defaultLocale,
  locales,
  siteMeta,
  type Locale,
  type PageSlug
} from "../data/site";

export const getLocalizedPath = (
  locale: Locale,
  slug: PageSlug | "" = ""
) => {
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const pagePath = slug ? `/${slug}/` : "/";

  if (!localePrefix) {
    return pagePath;
  }

  return slug ? `${localePrefix}/${slug}/` : `${localePrefix}/`;
};

export const getCanonicalUrl = (locale: Locale, slug: PageSlug | "" = "") =>
  new URL(getLocalizedPath(locale, slug), siteMeta.site).toString();

export const getAlternateLinks = (slug: PageSlug | "" = "") =>
  locales.map((locale) => ({
    locale,
    href: getCanonicalUrl(locale, slug)
  }));
