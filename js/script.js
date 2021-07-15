/* Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50*/




// preparare array 'bombe' ed inserire 16 numeri casuali

const bombsArray = [];
const totalBombs = 16;
let minNumber = 1;
let maxNumber;
const possibilities = maxNumber - totalBombs;

var level = prompt('scegli difficoltà fra "0", "1", "2"', '0');

// impostare valori difficoltà dei livelli

switch (level) {
    case '0':
        maxNumber = 100;
        break;
    case '1':
        maxNumber = 80;
        break;
    case '0':
        maxNumber = 50;
        break;
    default:
        maxNumber = 80;

}


while (bombsArray.length <= 15) {
    const bombs = randomNumber(minNumber, maxNumber);
    if (!bombsArray.includes(bombs)) {

        bombsArray.push(bombs);
    }

}
console.log(bombsArray);



//chiedere 16 numeri diversi all 'utente e inserirli in un array

const UserNumbersArray = [];

let points = 0;

while (UserNumbersArray.length < possibilities) {

    let number = parseInt(prompt('inserisci un  numero'));

    if (numberisvalid(number, UserNumbersArray)) {

        UserNumbersArray.push(number);
    } else {
        while (!numberisvalid(number, UserNumbersArray)) {

            number = parseInt(prompt('inserisci un  numero valido'));
        }
    }


    // confrono gli elementi dei due array
    if (!bombsArray.includes(number)) {

        points += 1;
    } else {
        alert('Game over!!! ' + 'Hai ottenuto ' + points + ' punti');
        UserNumbersArray.length = possibilities;
    }


}


// funzioni***************************************
function numberisvalid(num, numarr) {
    if (!numarr.includes(num) && !isNaN(num) && num <= 100 && num > 0)
        return numberisvalid;

}

function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}