// Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.


// Numero km percorrenza
var numeroKmPercorrenza = prompt('Quanti km vuoi percorrere?');
console.log(numeroKmPercorrenza);

// Età passeggero
var anniPasseggero = prompt('Quanti anni hai?');
console.log(anniPasseggero);

// Parseint con numeri interi
var numeroKmPercorrenzaNumb = parseInt(numeroKmPercorrenza);
var anniPasseggeroNumb = parseInt(anniPasseggero);
console.log('numero km percorsi', numeroKmPercorrenzaNumb);
console.log('anni passeggero', anniPasseggeroNumb);

// Prezzo biglietto
var prezzoBiglietto = numeroKmPercorrenzaNumb * 0.21;
console.log('prezzo biglietto', prezzoBiglietto);

// Prezzo Scontato
var prezzoScontatoOver65 = prezzoBiglietto - (prezzoBiglietto * 0.4);
var prezzoScontatoUnder18 = prezzoBiglietto - (prezzoBiglietto * 0.2);
console.log('prezzo over 65', prezzoScontatoOver65);
console.log('prezzo under 18', prezzoScontatoUnder18);


// Comparazione prezzi
var messaggioFinale;

if (anniPasseggeroNumb <= 18) {
    messaggioFinale = prezzoScontatoUnder18;
} else if (anniPasseggeroNumb >= 65) {
    messaggioFinale = prezzoScontatoOver65;
} else {
    messaggioFinale = prezzoBiglietto;
}
console.log('messaggio finale', messaggioFinale);

// Prezzo Finale
var prezzoFinale = messaggioFinale.toFixed(2);
alert(prezzoFinale);
// document.getElementById("price").innerHTML = prezzoFinale;