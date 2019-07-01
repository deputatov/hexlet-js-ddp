const extract = (tags) => {
    const someObj = {
        img: elem => getAttribute('src', elem),
        a: elem => getAttribute('href', elem),
        link: elem => getAttribute('href', elem),
    };

    return map(element => someObj[getName(element)](element), tags)
}

export default extract