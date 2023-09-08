 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var mensen
const BREEDTE = 20;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  mensen [
    {x: random(20,1260),
      y: random(20,700),
      speedX : random(-5, 5),
      speedY : random(-5, 5)},
    {x: random(20,1260),
      y: random(20,700),
      speedX : random(-5, 5),
      speedY : random(-5, 5)},
    {x: random(20,1260),
      y: random(20,700),
      speedX : random(-5, 5),
      speedY : random(-5, 5)},
    {x: random(20,1260),
     y: random(20,700),
      speedX : random(-5, 5),
      speedY : random(-5, 5)},
    {x: random(20,1260),
      y: random(20,700),
      speedX : random(-5, 5),
     speedY : random(-5, 5)}
  ]

}


/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  // teken
  for (var i = 0; i < mensen.length; i++) {
    rect(mensen[i].x, mensen[i].y, BREEDTE, BREEDTE);
    //beweging
    xPosities[i] = xPosities[i] + speedX[i];
    yPosities[i] = yPosities[i] + speedY[i];
    //stuiter
    if (xPosities[i] <= 0 || xPosities[i] + BREEDTE >= width) {
      speedX[i] = speedX[i] * -1;
    }
  
    if (yPosities[i] <= 0 || yPosities[i] + BREEDTE >= height) {
      speedY[i] = speedY[i] * -1;
    }
  }
  
}
