const random = (val) => {
    let arr = val;
    if (typeof val === 'string') {
        arr = val.split('');
    }
    return arr[ Math.floor(Math.random() * arr.length)];
};

const randomBetweenRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomColor = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
		return bgColor;
}

export {
    random,
    randomBetweenRange,
    randomColor
};
