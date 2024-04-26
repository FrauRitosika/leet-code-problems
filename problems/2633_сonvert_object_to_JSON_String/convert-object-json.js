/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */

const jsonStringify = function jsonConvert(object) {
    if (object == null) {
        return 'null';
    } else if (typeof (object) === 'string') {
        return '"' + object + '"';
    } else if (typeof (object) !== 'object') {
        return object;
    } else if (Array.isArray(object)) {
        return '[' + object.map((el) => jsonConvert(el)) + ']';
    } else {
        return '{' + Object.keys(object).map(key => '"' + key + '":' + jsonConvert(object[key])) + '}';
    }
};

module.exports = { jsonStringify };
