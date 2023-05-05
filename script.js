const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

let calculation = [];
let newCalculation;

function calculate(button) {
    const value = button.textContent
    
    if (value === 'Clear') {
        calculation = [];
        display.textContent = calculation
    } else if (value === 'Delete') {
        calculation.pop();
        newCalculation = calculation.join('') 
        display.textContent = newCalculation
    } else if (value === '=') {
        display.textContent = eval(newCalculation)
    } else {
        calculation.push(value)
        newCalculation = calculation.join('') 
        display.textContent = newCalculation 
    }
}

buttons.forEach(button => button.addEventListener('click', (e) => calculate(button)))