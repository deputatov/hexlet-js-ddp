const reduce = (func, acc, elements) => {
    if (isEmpty(elements)) {
        return acc;
    }
    return reduce(func, func(head(elements), acc), tail(elements));
};
const result = reduce((element, acc) => {
    return typeTag(element) === typeTag(obj) && methodName === typeTag(contents(element)) ? consList(contents(contents(element)), acc) : acc
}, l(), methods)
return head(result)

// teacher solution
const currentType = typeTag(obj);
const iter = (elements) => {
    if (isEmpty(elements)) {
        return null;
    }
    const element = head(elements);
    if (currentType === typeTag(element)) {
        const method = contents(element);
        if (methodName === car(method)) {
            return cdr(method);
        }
    }

    return iter(tail(elements));
};

return iter(methods);