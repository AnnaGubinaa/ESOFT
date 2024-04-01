function deepCopy(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj || obj instanceof Function) {
        return obj;
    }
    
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    
    let result = Array.isArray(obj) ? [] : {};
    
    hash.set(obj, result);
    
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = deepCopy(obj[key], hash);
        }
    }
    
    return result;
}

const origObject = {
    a: 1,
    b: { c: 2 },
    d: [3, 4],
    bool: true,
    str: "hello esoft",
};

const copiedObject = deepCopy(origObject);
console.log(copiedObject);