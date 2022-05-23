//constructor class for calculator

class Calculator {
  constructor(previousOperandTextElement,currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined 
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  //function to add number to screen
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  //function that uitilizes the operations a user chooses
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }
  //calculates what user inputs into calculator
  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current 
        break
      case '-':
        computation = prev - current 
        break
      case '*':
        computation = prev * current 
        break
      case '÷':
        computation = prev / current 
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    return number
  }
  //updates display of calculator
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = 
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }
    this.previousOperandTextElement.innerText = this.previousOperand
    } else { 
    this.previousOperandTextElement.innerText = ''
    }
  }
}

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


//DOM elements for inputing numbers

const numberButtons = document.querySelectorAll ('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// Functions for displaying number buttons and operation buttons to calculator on click
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})