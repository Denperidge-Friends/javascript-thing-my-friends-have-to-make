const myName = "Doja Cat";

/* Methode 1: innerText
    - Works like a charm
    - Als je niet zeker bent welke je wilt gebruiken, *GEBRUIK INNERTEXT*.
*/
document.getElementById("naam").innerText = myName;

/* Methode 2: innerHTML
    - Werkt ook
    - Deze methode is - vooral als je iets met user input maakt - EEN SECURITY HAZARD. 
Zie vraag-12-innerHTML.js & https://denperidge-friends.github.io/javascript-thing-my-friends-have-to-make/vraag-12-innerhtml
*/