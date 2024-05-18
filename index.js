function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
    }
    
    return result;
}

function myReduce(collection, callback, acc) {
    let hasInitialAccumulator = acc !== undefined;

    if (Array.isArray(collection)) {
        let startIndex = 0;
        if (!hasInitialAccumulator) {
            acc = collection[0];
            startIndex = 1;
        }
        for (let i = startIndex; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        let keys = Object.keys(collection);
        let startIndex = 0;
        if (!hasInitialAccumulator) {
            acc = collection[keys[0]];
            startIndex = 1;
        }
        for (let i = startIndex; i < keys.length; i++) {
            acc = callback(acc, collection[keys[i]], collection);
        }
    }

    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    return collection[key];
                }
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (predicate(collection[key], key, collection)) {
                    result.push(collection[key]);
                }
            }
        }
    }

    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length;
    }
    return 0;
}

function myFirst(array, n) {
    if (!Array.isArray(array)) {
        throw new TypeError('The first argument must be an array');
    }
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (!Array.isArray(array)) {
        throw new TypeError('The first argument must be an array');
    }
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    if (typeof object !== 'object' || object === null) {
        throw new TypeError('The argument must be a non-null object');
    }
    return Object.keys(object);
}

function myValues(object) {
    if (typeof object !== 'object' || object === null) {
        throw new TypeError('The argument must be a non-null object');
    }
    return Object.values(object);
}