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
//creo la variabile che userò per visualizzare il countdown
const timeHtml = document.getElementById('time-html');
//creo la variabile da cui estraggo il numero
let numberInput = document.querySelector('input');
//creo la variabile per il button
const btnCheck = document.getElementById('check');
//creo la variabile per il risultato finale
let result = document.getElementById('risultato');



//creo la funzione che mi creerà i numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//e uso un ciclo WHILE per generare i 5 numeri
while(numeriRandom.length < numeriDaCreare){
    //creo la variabile che prenderài numeri random
    let numeroCreato = getRndInteger(1, 20);
    //e controllo che i numeri inseriti NON siano già presenti
    if(!numeriRandom.includes(numeroCreato)){
        //se NON sono presenti doppioni, allora pusho nell'array!
        numeriRandom.push(numeroCreato);
    }
}
console.log(numeriRandom)
//ora li inserisco nell'html
showNumeri.innerHTML = `
<div class="fs-3">I numeri casuali sono: 
<span class="text-white">${numeriRandom.join(' ')}</span>. 
Memorizzali subito! </div>
`;

//ora mi serve il timer
//creo la variabile del tempo mancante(dal nr più alto)
let timeLeft = 5;
//scrivo in pagina il timeleft da subito, così inizia il contdown 
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
        //facendo sparire anche il timer ovviamente
        timeHtml.classList.add('d-none');
        let divInput = document.getElementById('input');
        divInput.classList.remove('d-none');
        clearInterval(timer);
    }
}

//creo l'array vuoto che si riempirà con i numeri scritti dall'utente
let numeriInseriti = [];
//ora creo la funzione che mi serve per raccogliere i numeri
function inviaNumero(){
    //mi serve il valore(ed anche il parse) del numero inserito
    let numberInputVal = parseInt(numberInput.value);
    //SE i numeri inseriti dall'utente sono uguali ai numeri creati
    if(numeriInseriti.length < numeriDaCreare){
        //allora li pusho nell'array
        numeriInseriti.push(numberInputVal);
    }
    console.log(numeriInseriti);
    //e SE i numeri inseriti sono uguali ai numeri creati
    if(numeriInseriti.length === numeriDaCreare){
        //(btncheck) rimuovo l'evento al click, cosi non potranno essere inseriti altri numeri
        this.removeEventListener('click', inviaNumero)
        check();
    }
}
//attacco la funzione al bottone!
btnCheck.addEventListener('click', inviaNumero);

//Infine, creo la funzione che confronta i numeri
function check (){
    let numeriIndovinati = 0; 
    //creo un ciclo for che mi confronta i numeri inseriti con quelli generati
    for(let i = 0; i < numeriRandom.length; i++){
        //SE i numeriInseriti includono un numero tra i numeriRandom
        if(numeriInseriti.includes(numeriRandom[i])){
            numeriIndovinati++
        }
    }
    risultato.innerHTML = `Hai indovinato un totale di ${numeriIndovinati} numeri!`;
}


