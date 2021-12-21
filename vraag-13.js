// Maak een js file...

// Ze zegt onclick "attribute". Attributes zijn <button dit="bijvoorbeeld">, niet properties (zoals javascriptVar.name = ...)
// aka, ik moet nu code schrijven voor een button aan te maken, en die in de html <button onclick="..."> te geven
// Niet om dramatisch en elitist te doen, but I need a shower (zie mijn redenering hierover in vraag-3.html)

function OpenGoogle() {
    // die via een onClick attribute naar google.com linkt (window.location.href).
    window.location.href = "https://google.com/";
}


/*
Methode 1: gebruik DOM
    - Clumsy om te schrijven
*/
// ... en maak hierin een button ...
var newButton = document.createElement("button");
newButton.innerText = "methode 1";
// ... die via een onClick attribute naar google.com linkt (window.location.href). ...
newButton.setAttribute("onclick", "OpenGoogle();");  // De attribute rendered als pure text, dus we moeten er letterlijke JS code inschrijven
document.body.appendChild(newButton);


/*
Methode 1-ish: DOM, maar gebruik geen attribute
    - Technisch gezien de beste optie
    - Maar niet volgens de opdracht
    - Also elementen aanmaken via DOM blijft een clumsy pain
*/
var anotherNewButton = document.createElement("button");
anotherNewButton.innerText = "methode 1-ish";
anotherNewButton.onclick = OpenGoogle;  // Nu gebruikt het een goede listener, en kunnen we 
document.body.appendChild(anotherNewButton);

/* 
Methode 2: maak HTML aan
    - Minder schrijfwerk
    - Een beetje een sin against god
*/
var andAnotherNewButton = "<button onclick=OpenGoogle();>Methode 2</button>";
document.write(andAnotherNewButton);


/* 
... de rest van de opdracht is verdere uitleg over het inleveren van de opdracht in kwestie etc, zie canvas
Er staat wel nog iets van "Bekijk bij twijfel zeker eens het filmpje over de window variabele in JavaScript", 
maar ik heb geen access tot de module noch het filmpje. Dus als daar iets instond van de manier hoe het te doen
dat de leerkracht wilt, I have no idea, so be wary and stuff!
*/
