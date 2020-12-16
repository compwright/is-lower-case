/**
 * Check if a string is lower case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  if (typeof string !== 'string') {
    return
  }

  return locale
    ? string.toLocaleLowerCase(locale) === string && string.toLocaleUpperCase(locale) !== string
    : string.toLowerCase() === string && string.toUpperCase() !== string
}
