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
var xPosities;
var yPosities;
var speedX;
var speedY;
const BREEDTE = 20;
var i;


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

  // initialiseer waarden
  speedX = [random(-5, 5),random(-5, 5),random(-5, 5),random(-5, 5),random(-5, 5)];      // random waarde tussen -5 en 5
  speedY = [random(-5, 5),random(-5, 5),random(-5, 5),random(-5, 5),random(-5, 5)];      // 👆
  xPosities = [random(20,1260), random(20,1260), random(20,1260), random(20,1260), random(20,1260)];
  xPosities = [random(20,700), random(20,700), random(20,700), random(20,700), random(20,700)];
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
  for (var i = 0; i < xPosities.length; i++){
  noStroke;
  fill(255, 255, 255);
  rect(xPosities[i], yPosities[i], BREEDTE, BREEDTE);
  

  // update positie
  
  xPosities[i] = xPosities[i] + speedX[i];
  yPosities[i] = yPosities[i] + speedY[i];

  // stuiter evt. tegen de kanten
  if (xPosities[i] <= 0 || xPosities[i] + BREEDTE >= width) {
    speedX[i] = speedX[i] * -1;
  }

  if (yPosities[i] <= 0 || yPosities[i] + BREEDTE >= height) {
    speedY[i] = speedY[i] * -1;
  }
 }

}
