// Maak een rekenmachine waarbij je adv 2 prompts beide getallen gaat optellen bij elkaar en deze uitkomst "schrijf" je op de website.

// In de eerste prompt wordt er gevragd voor getal 1... {ander ding} ... Laat dit ook zien in je prompt.
var getal1 = prompt("Welkom bij rekenmachine! Gelieve getal 1 in te geven", 0);  // tweede waarde (0 hier) is een default waarde indien de gebruiker niets ingeeft

// ... in de 2de prompt wordt er gevraagd voor getal 2. Laat dit ook zien in je prompt.
var getal2 = prompt("Gelieve nu getal 2 in te geven", 0);


// Dus toon de uitkomst van getal1 + getal2
document.write(getal1 + getal2);
// And now you look like a BUFFOON! Het zijn strings by default

// Convert ze naar getallen,,,
getal1 = parseInt(getal1);
getal2 = parseInt(getal2);

document.write("    |   ");  // Spaties zodat we onszelf niet verwarren

// En we schrijven wat decoratie tekst, enn
document.write("getal 1 + getal 2 = " + getal1 + getal2)
// IT STILL DOESN'T WORK!

// De code werkt ook van links naar rechts. Het pakt de string, en voegt er eerst getal 1 aan toe.
// Getal 1 is wel degelijk een int, maar javascript convert het terug naar een string omdat je string + int doet
// omdat, wel, string + int niet gaat zonder converting. Daarna doet javascript de string + getal 2, en repeat het hiervoor gezegde

document.write("    |   ");

// Mogelijke oplossingen (for real this time)
// Methode 1: doe de plus apart
document.write("getal 1 + getal 2 = ")
document.write(getal1 + getal2);  // Dit is nu gewoon int + int!
document.write("    |   ");

// Methode 2: variabele
var uitkomst = getal1 + getal2
document.write("getal 1 + getal 2 = " + uitkomst);  // Het getal is al goed berekend, en nu toegevoegd aan de string!
document.write("    |   ");

// Methode 3: volgorde van bewerkingen
document.write("getal 1 + getal 2 = " + (getal1 + getal2));  // Wiskunde, volgorde van bewerkingen!  
document.write("    |   ");

// Methode 4: fancy string formatting
// Again, niet zeker over browser compatibility, so be wary and stuff
document.write(`getal 1 + getal 2 = ${getal1 + getal2}`);  // Wiskunde, volgorde van bewerkingen!  
