// variables
let numbers = [];
let guessedNumbers = 0;
let firstCountdown = 6;
let countdown;
let timer;
let timeout;
let secondsLeft = 6;
// si deve richiamare la funzione del set setInterval
document.getElementById('start').addEventListener('click', setCountdown);
document.getElementById('start').addEventListener('click', btnDisappear);

// countdown funzione
function countFunction() {
    firstCountdown += -1;
    document.getElementById('displayTimer').innerHTML = `<h1>La sfida inizia tra:</h1> <h1>${firstCountdown}</h1>`;
    if (firstCountdown == 0) {
        document.getElementById('displayTimer').innerHTML = "";

        clearInterval(countdown);
        gameStart();
    }
}
// setInterval separato in un altra funzione
function setCountdown(){
    countdown = setInterval(countFunction, 1000);
}
// button disappear
function btnDisappear(){
    document.getElementById('start').classList.add('d-none');
}

// game start function
function gameStart(){
    numbers = [];
    while (numbers.length < 5){

        let x = Math.floor(Math.random() * 100) + 1;
        if(numbers.includes(x)== false){
            numbers.push(x)
            document.getElementById('displayNumbers').innerHTML += `<span>${x}</span>`;
        }
    }
    if(numbers.length == 5){
        setTimer();
        
    }


}

//setInterval game start
function setTimer(){
    timer = setInterval(timerFunction, 1000);
}

function timerFunction(){
    secondsLeft += -1;
    document.getElementById('displayTimer').innerHTML = `<h1>${secondsLeft}</h1>`;
    if(secondsLeft == 0){
        document.getElementById('displayTimer').innerHTML = "";
        document.getElementById('displayNumbers').innerHTML = "";    
        guessStart();
    }
}

function guessStart(){
    timeout = setTimeout(guessPhase, 1000);
}

function guessPhase(){
    clearInterval(timer);
    for ( let i = 0; i < 5; i ++ ) {
        let guess = parseInt(prompt("Quale numero ricordi?"));
        console.log(guess);
        if (numbers.includes(guess)){
            guessedNumbers++;
            let k = 0;
            // rimozione numero indovinato
            do{

                if (guess == numbers[k]){
                    numbers.splice(k, 1);
                    console.log(numbers);
                    break;
                }
                k++
            }while(k<numbers.length)
            
        }
    }
    document.getElementById('displayTimer').innerHTML = ``;
    document.getElementById('displayNumbers').innerHTML = `<h1>Hai indovinato ${guessedNumbers} numeri</h1>`
}