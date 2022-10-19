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
showNumeri.innerHTML = `I numero casuali sono: ${numeriRandom}`;