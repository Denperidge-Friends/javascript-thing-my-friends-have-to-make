// Maak in javascript file

// en variabele 'grosPrice' aan die je zelf een waarde geeft.
var grosPrice = 5;

// Daarna maak je een tweede variabele aan waarin je 21% verrekend van 'grosPrice' (grosPrice - BTW). Deze variabele noem je 'netPrice'.
// Dit is gewoon wiskunde. Maar nog steeds, verschillende methodes! Pak degene die je het 
// 1:
var netPrice = grosPrice - (grosPrice * 0.21);  // Remember: code speelt meestal via Amerikaanse regels. Decimalen worden aangeduid met '.', niet ','!

// 2:
var netPrice = grosPrice - (grosPrice * 21 / 100);

// 3: (technically de minst goede, omdat je nu een extra variabele & lijn code hebt). Maar als het zo voor je duidelijker is, go off!
var btw = grosPrice * 0.21;
var netPrice = grosPrice - btw;

// Daarna toon je in de browser de bekomen netto prijs.
alert(netPrice);
