/* 
Herwerk jullie oefening met nog een derde prompt. Zodat je kan gaan bepalen of je aftrekt of optelt.
*/

// Dus, uh, herwerk jullie oefening reffered naar een _toekomstige_ oefening. (vraag 11, so check that out first)
// Ik snap dat leerkrachten vragen willen scramblen maar zie dat het nog klopt qua volgorde :sob:


// De eerste prompt vraagt het eerste getal
var getal1 = prompt("Welkom bij rekenmachine! Gelieve getal 1 in te geven", 0);  // tweede waarde (0 hier) is een default waarde indien de gebruiker niets ingeeft
// De 2de prompt vraag 'min of plus'? (dus de woorden "min" of "plus" niet - of +)
var plusOfMin = prompt("Min of plus?", "plus");
// De 3de prompt vraagt het 2de getal
var getal2 = prompt("Gelieve nu getal 2 in te geven", 0);

/* 
Niet gevraagd in opdracht, wel goede gewoontes:
    - toLowerCase(), zodat het niet crashed bij PluS of PLUS of plUs
    - trim(), zodat het spaties links en rechts van de input verwijderd, 
        zodat het niet crashed op '   plus' of ' plus ' 
*/
var uitkomst;
// Als in de 2de prompt 'min' wordt ingegeven
if (plusOfMin.toLowerCase().trim() == "min") {
    //  dan zal je het 2de getal moeten aftrekken van je eerste,
    uitkomst = getal1 - getal2;
}
// Als er *iets anders* wordt ingegeven dan tel je deze 2 getallen op.
// Note iets anders!! ze zegt niet "als er plus wordt ingegeven" 
else {

    uitkomst = getal1 + getal2;
}


// Methode 3: volgorde van bewerkingen
document.write("getal 1 + getal 2 = " + (getal1 + getal2)); 
