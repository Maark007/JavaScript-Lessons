const express = require("express");
const server = express();

function calculator(firstNumber, operator, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.log("Put a number dunkey.");
  }
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    default:
      console.log("Invalid operator.");
  }
}

server.listen(3000, () => {
  console.log("Calculator ONLINE!");
  console.log(calculator(5, "+", 5));
  console.log(calculator(5, "-", 5));
  console.log(calculator(5, "*", 5));
  console.log(calculator(5, "/", 5));
});
