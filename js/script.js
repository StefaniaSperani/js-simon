'use strict';
/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 3 secondi.
Dopo 3 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//ho creato un div nell'html, e lo estraggo
let showNumeri = document.getElementById('numeri');
//ora creo un array dove metto i 5 numeri random
let numeriRandom = [];
//creo una variabile per i numeri, in caso in futuro li voglia cambiare
let numeriDaCreare = 5;

let timeHtml = document.getElementById('time-html');

//creo la funzione che mi creerà i numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//uso un ciclo WHILE per generare i 5 numeri
while(numeriRandom.length < numeriDaCreare){
    let numeroCreato = getRndInteger(1, 20);
    if(!numeriRandom.includes(numeroCreato)){
        numeriRandom.push(numeroCreato);
    }
}
//ora li inserisco nell'html
showNumeri.innerHTML = `
<div class="fs-3">I numeri casuali sono: <span class="text-white">${numeriRandom}</span>. 
Memorizzali subito! </div>
`;

//ora mi serve il timer
//creo la variabile del tempo mancante(dal nr più alto)
let timeLeft = 5;
//scrivo in pagina il timeleft da subito, così inizia il contdown dal 3
timeHtml.innerHTML = timeLeft;
//ora creo una variabile che usa una timing function
const timer = setInterval(countDown, 1000);
//e al suo interno definisco la funzione che voglio passargli
function countDown(){
    //decremento il time left, per il contdown
    timeLeft--;
    //e scrivo in pagina in maniera tale che si veda il decrescere dei numeri
    timeHtml.innerHTML = timeLeft;
    //ora DEVO fermarlo nel momento in cui arriva a 0
    if(timeLeft === 0){
        //e nascondo il div che avevo inserito(riga32)
        showNumeri.classList.add('d-none');
        //facndo sparire anche il timer ovviamente
        timeHtml.classList.add('d-none');
        clearInterval(timer);
    }
}
