const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

let equation = []
let newEquation;

const calculate = (button) => {
    const value = button.textContent
    
    if (value === 'Clear') {
        equation = []
        display.textContent = equation
    } else if (value === 'Delete') {
        equation.pop()
        newEquation = equation.join('')
        display.textContent = newEquation
    } else if (value === '=') {
        display.textContent = eval(newEquation)
    } else {
        equation.push(value)
        newEquation = equation.join('')
        display.textContent = newEquation
    }
}

buttons.forEach(button => button.addEventListener('click', (e) => calculate(button)))
