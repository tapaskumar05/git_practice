const random = (val) => {
    let arr = val;
    if (typeof val === 'string') {
        arr = val.split('');
    }
    return arr[ Math.floor(Math.random() * arr.length)];
};

export {
    random
};
