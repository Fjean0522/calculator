/*
let operand1;
let operator;
let operand2;

const add = (operand1, operand2) => operand1 + operand2;
const subtract = (operand1, operand2) => operand1 - operand2;
const multiply = (operand1, operand2) => operand1 * operand2;
const divide = (operand1, operand2) => operand1 / operand2;
*/


const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

let calculation = [];
let noComa;

function calculate(button){
    const value = button.textContent
    calculation.push(value)
    noComa = calculation.join('') 
    display.textContent = noComa 
    console.log(calculation)
}

buttons.forEach(button => button.addEventListener('click', (e) => calculate(button)))
