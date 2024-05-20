/**
 * @param {null|boolean|number|string|Array|Object} objA
 * @param {null|boolean|number|string|Array|Object} objB
 * @return {boolean}
 */

const areDeeplyEqual = function elqual(objA, objB) {
    if (typeof (objA) !== 'object' || typeof (objB) !== 'object' || objA === null || objB === null) {
        return objA === objB;
    }

    if (Array.isArray(objA) !== Array.isArray(objB)) {
        return false;
    }

    const valKeys = Object.keys(objA);
    const valKeysForComp = Object.keys(objB);

    if (valKeys.length !== valKeysForComp.length) {
        return false;
    }

    for (const key of valKeys) {
        if (!elqual(objA[key], objB[key])) {
            return false;
        }
    }

    return true;
};

export { areDeeplyEqual };
