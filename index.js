const body = document.querySelector('body');
const redButton = document.querySelector('.red');
const blueButton = document.querySelector('.blue');
const greenButton = document.querySelector('.green');
const blackButton = document.querySelector('.black');
const orangeButton = document.querySelector('.orange');

redButton.addEventListener('click', ()=>{body.style.backgroundColor = 'red'});
blueButton.addEventListener('click', ()=>{body.style.backgroundColor = 'blue'});
greenButton.addEventListener('click', ()=>{body.style.backgroundColor = 'green'});
blackButton.addEventListener('click', ()=>{body.style.backgroundColor = 'black'});
orangeButton.addEventListener('click', ()=>{body.style.backgroundColor = 'orange'});