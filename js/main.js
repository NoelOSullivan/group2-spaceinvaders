/* SCREEN MANAGEMENT */

var introScreenView = document.getElementById("introScreen");
var gameScreenView = document.getElementById("gameScreen");

function showScreen(screenState) {
    switch(screenState) {
        case 2:
            introScreenView.style.display = "none";
            gameScreenView.style.display = "block";
    }
}

//--------------------------------------

/* INTRO PAGE */
var intervalForLetters;

startIntroPage();

function startIntroPage() {
    document.getElementById("playText").innerHTML = "";
    document.getElementById("spaceInvadersText").innerHTML = "";
    document.getElementById("textMystery").innerHTML = "&nbsp;";
    document.getElementById("text30").innerHTML = "&nbsp;";
    document.getElementById("text20").innerHTML = "&nbsp;";
    document.getElementById("text10").innerHTML = "&nbsp;";
    document.getElementById("scoreAdvancedTableText").style.display = "none";
    document.getElementById("pointsLegendHolder").style.display = "none";
    printLetterByLetter("playText", "PLAY", 200, "printSpaceInvaders");
}

function reinitIntroPage() {
    setTimeout(startIntroPage, 1000);
}

function printLetterByLetter(domElement, text, speed, callback) {
    var textElement = document.getElementById(domElement);
    var i = 0;
    intervalForLetters = setInterval(function () {
        textElement.innerHTML += text.charAt(i);
        i++;
        if(i > text.length - 1) {
            clearInterval(intervalForLetters);
            window[callback]();
        }
    }, speed)
}

function printSpaceInvaders() {
    printLetterByLetter("spaceInvadersText", "SPACE INVADERS", 200, "showScoreAdvancedTable");
}

function showScoreAdvancedTable() {
    var element = document.getElementById("scoreAdvancedTableText");
    element.style.display = "block";
    element = document.getElementById("pointsLegendHolder");
    element.style.display = "block";
    printLetterByLetter("textMystery", "=? MYSTERY", 200, "showText30");
}

function showText30() {
    printLetterByLetter("text30", "=30 POINTS", 200, "showText20");
}

function showText20() {
    printLetterByLetter("text20", "=20 POINTS", 200, "showText10");
}

function showText10() {
    printLetterByLetter("text10", "=10 POINTS", 200, "reinitIntroPage");
}

