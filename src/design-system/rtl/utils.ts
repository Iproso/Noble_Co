const RTL_LOCALES = ['ar', 'he', 'fa', 'ur'];

export function isRtlLocale(locale: string): boolean {
  return RTL_LOCALES.includes(locale.split('-')[0]);
}

export function flipIfRtl(
  locale: string,
  ltrValue: string,
  rtlValue: string,
): string {
  return isRtlLocale(locale) ? rtlValue : ltrValue;
}
