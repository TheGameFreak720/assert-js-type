/**
 * Verifies that the typeof data matches at least one of the types.
 * @param {Array} types - Types to match against.
 * @param  data - data to check the type of.
 * @returns {boolean} if the typeof data matches any type will return true. If not it will return false
 */
export default function(types, data) {
  if (!Array.isArray(types)) {
    return new Error('types must be an array');
  } else if (!types.length) {
    return new Error('types must have a length');
  } else {
    const isArray = Array.isArray(data);

    if (isArray && types.indexOf('array') !== -1) {
      return true
    } else if (data === null && types.indexOf(data) !== -1) {
      return true
    } else if (types.indexOf(typeof data) !== -1) {
      return true;
    } else {
      return false;
    }
  }
};
