export const isObject = (item) =>
    item && typeof item === 'object' && !Array.isArray(item) && item !== null;

export const mergeObjects = function (target, source) {
    const output = { ...target };
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, {
                        [key]: source[key],
                    });
                } else output[key] = mergeObjects(target[key], source[key]);
            } else {
                Object.assign(output, {
                    [key]: source[key],
                });
            }
        });
    }
    return output;
};

export const sortArrayByName = (arr, sortBy) => {
    if (!arr || arr.length === 0) return [];
    const arrSorted = arr.sort((prev, next) =>
        prev[sortBy].toLowerCase().localeCompare(next[sortBy].toLowerCase()),
    );
    return arrSorted;
};

export const dynamicSort = (property, isNumber) => {
    let cloneProperty = property;
    let sortOrder = 1;

    if (property[0] === '-') {
        sortOrder = -1;
        cloneProperty = property.substr(1);
    }

    return (a, b) => {
        if (sortOrder === -1) {
            if (isNumber) return b[cloneProperty] - a[cloneProperty];
            return b[cloneProperty].localeCompare(a[cloneProperty]);
        }
        if (isNumber) return a[cloneProperty] - b[cloneProperty];
        return a[cloneProperty].localeCompare(b[cloneProperty]);
    };
};

export const titleFormatter = (name) => {
    var count = 12;
    return name.slice(0, count) + (name.length > count ? '...' : '');
};
