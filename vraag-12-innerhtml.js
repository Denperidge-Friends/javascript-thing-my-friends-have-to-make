// Zie vraag-12.js & https://codepen.io/denperidge/pen/RwLZJEm voor context
// Zie het in actie op https://denperidge-friends.github.io/javascript-thing-my-friends-have-to-make/vraag-12-innerhtml 

/* Methode 2: innerHTML
    - Werkt ook
    - Deze methode is - vooral als je iets met user input maakt - EEN SECURITY HAZARD.
*/
var userInput = "Doja Cat"
document.getElementById("naam").innerHTML = userInput;
alert("Dat was voorbeeld 1 met innerHTML! Dat ging oké. Klik op OK voor voorbeeld 2")

userInput = "De user zijn naam en wat cODE <style>body {background-color: blue;} img { width: 500px; height: auto;}</style><img src='https://i.imgur.com/n6zWlON.jpg'/> <img src='https://memegenerator.net/img/images/72882786.jpg'/>";
document.getElementById("naam").innerHTML = userInput;

alert("Ik heb zojuist enkel de userInput variabele tekst gegeven, en dit dan in de span zijn innerHTML, niks anders. Druk op OK om de innerHTML te clearen")
document.getElementById("naam").innerHTML = "";

alert("Maar als we exact dezelfde input in innerText gooien...")
document.getElementById("naam").innerText = userInput;

alert("Zijn we perfect oké!\n\ninnerHTML rendered de HTML code, maar innerText behandeld het als tekst, wat een stuk veiliger is. Je mag zeker innerHTML gebruiken, maar doe het omdat het nodig is en als het veilig is!\n\n(Wel, die code zou er door de server-side programmeur er al uitgefiltered moeten geweest zijn, maar extra precautions doen allesbehalve kwaad)")