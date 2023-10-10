export const getShortAddress = (str) => {
    return str.slice(0, 14) + '...' + str.slice(-5);
}

export const getShortHash = (str) => {
    return str.slice(0, 3) + '...' + str.slice(-5);
}

export const objectToArray = (obj) => {
    let arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            if (typeof value === "object") {
                value = objectToArray(value);
            }
            arr[key] = value;
        }
    }
    return arr;
}