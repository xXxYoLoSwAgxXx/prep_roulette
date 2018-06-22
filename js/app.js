/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/

// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.

var startBtn = document.getElementById('but');
var stopBtn = document.getElementById('butt');
var clearButton = document.getElementById('clear');
function generateRandom (){
let rando = Math.floor((Math.random()*36));
rouletteBody.innerHTML = rando;


if (rando%2 === 0 && rando !== 0){
    rouletteBody.style.backgroundColor = 'black';
} else if(rando%2 === 1) {
    rouletteBody.style.backgroundColor = 'red';
} else if(rando === 0){
    rouletteBody.style.backgroundColor = 'green';
}

}


var startPlaying = function(){
    begin = setInterval(generateRandom, 1000);
    startBtn.disabled=true;
    stopBtn.disabled=false;
    rouletteBody.style.display = 'block';
}
var stop = function() {
    clearInterval(begin);
    stopBtn.disabled=true;
    startBtn.disabled=false;
    
}
var startAgain = function() {
    stopBtn.disabled=false;
    startBtn.disabled=false;
    rouletteBody.style.display = 'none';
}
stopBtn.addEventListener('click', stop);
startBtn.addEventListener('click', startPlaying);
clear.addEventListener('click', startAgain);


