/*
const grey = document.getElementById('grey');
const white = document.getElementById('white');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');


const bgColorToGrey = function greyColor() {
    document.body.style.background = 'grey';
}
const bgColorToWhite = function greyColor() {
    document.body.style.background = 'white';
}
const bgColorToBlue = function greyColor() {
    document.body.style.background = 'blue';
}
const bgColorToYellow = function greyColor() {
    document.body.style.background = 'Yellow';
}

grey.addEventListener('click', bgColorToGrey);
white.addEventListener('click', bgColorToWhite);
blue.addEventListener('click', bgColorToBlue);
yellow.addEventListener('click', bgColorToYellow);
*/


//Effecient Way
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(button){
    button.addEventListener('click',function(e){
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        body.style.backgroundColor = e.target.id;
    });
});