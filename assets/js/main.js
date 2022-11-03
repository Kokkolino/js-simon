// variables
let numbers = [];
let guessedNumbers = 0;
let firstCountdown = 5;
let countdown;

// si deve richiamare la funzione del set setInterval
document.getElementById('start').addEventListener('click', setIt);
document.getElementById('start').addEventListener('click', btnDisappear);

// countdown funzione
function countFunction() {
    document.getElementById('displayTimer').innerHTML = `<h1>La sfida inizia tra:</h1> <h1>${firstCountdown}</h1>`;
    firstCountdown += -1;
    if (firstCountdown < 0) {
        document.getElementById('displayTimer').innerHTML = "";

        clearInterval(countdown);
        gameStart();
    }
}
// setInterval separato in un altra funzione
function setIt(){
    countdown = setInterval(countFunction, 1000);
}
// button disappear
function btnDisappear(){
    document.getElementById('start').classList.add('d-none');
}

function gameStart(){
    numbers = [];
    while (numbers.length < 5){

        let x = Math.floor(Math.random() * 100) + 1;
        if(numbers.includes(x)== false){
            numbers.push(x)
            document.getElementById('displayNumbers').innerHTML += `<span>${x}</span>`;
        }
    }
    console.log(numbers)
}