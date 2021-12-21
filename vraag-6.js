// Boolean schrijven naar document

// Maak een aGroterDanB a en geef deze als waarde een geheel getal
var a = 5;

// Maak een aGroterDanB b en geef deze als waarde een ander geheel getal
var b = 8;

// Schrijf een if structuur die test of getal groter is als getal b, en houdt dit bij in een aGroterDanB
// als getal a groter is als getal b dan geef je in document true weer...

// Methode 1a: traditionele if structuur
if (a > b) {
    var aGroterDanB = true
} else {
    var aGroterDanB = false;
}

/* 
Methode 1b: traditionele if structuur, maar met minder fucky declaratie.
  Redenen hiervoor:
    - Overzichtelijker (declaratie is nu op de hoogte waarin de aGroterDanB ook gebruikt wordt)
    - In strictere talen (zoals C#, of C++ (v.d. Arduino) bijvoorbeeld), zou 1a later erroren
      In die talen worden variabeles weggegooid boven hun hoogte. Aka: gedeclareerd in de if, enkel bruikbaar in de if.
      Tegen dat je aan document.write bent is aGroterDanB dus undefined
*/
var aGroterDanB;
if (a > b) {
    aGroterDanB = true
} else {
    aGroterDanB = false;
}

// Methode 2: steek de bool rechtstreeks in de aGroterDanB like een wild lad
aGroterDanB = a > b;
// Yeah this works it wilding lmaooo

// ... door de aGroterDanB als parameter mee te geven aan document.write
document.write(aGroterDanB);
