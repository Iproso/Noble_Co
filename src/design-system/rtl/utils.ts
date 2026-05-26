const RTL_LOCALES = ['ar', 'he', 'fa', 'ur'];

export function isRtlLocale(locale: string): boolean {
  return RTL_LOCALES.includes(locale.split('-')[0]);
}

export function flipIfRtl(locale: string, ltrValue: string, rtlValue: string): string;
export function flipIfRtl(ltrValue: string, rtlValue: string, isRtl: boolean): string;
export function flipIfRtl(a: string, b: string, c: string | boolean): string {
  if (typeof c === 'boolean') {
    return c ? b : a;
  }
  return isRtlLocale(a) ? c : b;
}
