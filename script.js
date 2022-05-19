//operator functions

function add(a , b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a , b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// function with switch case that takes operator and two numbers then calls on operator function.

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);  
  }
};

//DOM elements for inputing numbers

const numberButton = document.querySelectorAll ('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearbutton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.result');
const currentOperand = document.querySelector('.current');
const lastOperand = document.querySelector('.last');

currentOperand.textContent = ' ';
lastOperand.textContent = ' ';

//functions that populate the display of calculator and store the display value

let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;

numberButton.forEach((number) => {
  number.addEventListener('click' , function(){
    storedNumber += number.ariaValueMax;
    currentOperand.textContent = storedNumber;
  })
});

operatorButton.forEach((operator => {
  operator.addEventListener('click', function() {
    firstNumber = storedNumber;

    clickedOperator = operator.textContent;
    lastOperand.textContent = storedNumber + clickedOperator;

  })
}));


