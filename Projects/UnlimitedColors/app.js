const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
// console.log(randomColor());

let intervalId;
const changeColorHandler = function () {
    // console.log('started');
    if (intervalId == null) {
        intervalId = setInterval(changeBg, 1000);
    }
    function changeBg() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopBgColor = function () {
    // console.log('stopped');
    clearInterval(intervalId);
    intervalId = null;
}


const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click',changeColorHandler);

stop.addEventListener('click',stopBgColor);