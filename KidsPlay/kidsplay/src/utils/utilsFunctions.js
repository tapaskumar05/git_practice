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
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
	return bgColor;
};

const randomColorWithOpacity = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    // const opacity = Math.floor(Math.random() * 10) /10;
    const opacity = 0.2;
    const color = "rgb(" + x + "," + y + "," + z + ")";
    const colorWithOpacity = "rgba(" + x + "," + y + "," + z + "," + opacity + ")";
	return {
        color,
        colorWithOpacity
    };
};

export {
    random,
    randomBetweenRange,
    randomColor,
    randomColorWithOpacity
};
