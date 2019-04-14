const playBtnClickSound = () => {
    const btnClickSound = new Audio('../sound/button-11.wav');
    console.log(btnClickSound);
    document.body.append(btnClickSound)
    btnClickSound.play();
};

export {
    playBtnClickSound
}