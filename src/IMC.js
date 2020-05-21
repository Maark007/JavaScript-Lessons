const express = require("express");
const server = express();

function bodyMassIndex(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    return console.log("Put a number dude!");
  }
  const imc = weight / (height * height);
  if (imc < 17) {
    console.log("Very underweight");
  } else if (imc >= 17 && imc <= 18.49) {
    console.log("Underweight");
  } else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Normal weigth");
  } else if (imc >= 25 && imc <= 29.99) {
    console.log("Overweigth");
  } else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesity I");
  } else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesity II");
  } else {
    console.log("Heart attack");
  }
  return imc;
}

server.listen(3000, () => {
  console.log("Server ON ;)");
  console.log(bodyMassIndex(70, 1.80));
});
