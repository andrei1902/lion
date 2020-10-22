/**
 * To filter out some added characters in IE
 *
 * @param {string} str
 * @param {import('@lion/localize/types/LocalizeMixinTypes').FormatDateOptions} [options] Intl options are available
 * @returns {string}
 */
export function normalizeIntlDate(str, { weekday, year, month, day } = {}) {
  const dateString = [];
  for (let i = 0, n = str.length; i < n; i += 1) {
    // remove unicode 160
    if (str.charCodeAt(i) === 160) {
      dateString.push(' ');
      // remove unicode 8206
    } else if (str.charCodeAt(i) === 8206) {
      dateString.push('');
    } else {
      dateString.push(str.charAt(i));
    }
  }

  const result = dateString.join('');

  // Normalize webkit date formatting without year, in this case,
  // only webkit is missing the comma in the date "Saturday, 12 October"
  if (
    !year &&
    weekday === 'long' &&
    month === 'long' &&
    day === '2-digit' &&
    result.indexOf(',') === -1
  ) {
    return result.replace(' ', ', ');
  }

  return result;
}
