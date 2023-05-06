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
        equation.pop()  // removes last item in the equation

        newEquation = equation.join('')  // removes commas between items in array 

        display.textContent = newEquation
    } else if (value === '=') {
        display.textContent = eval(newEquation) // evaluates operands & operators in array & return/display answer 
    } else {
        equation.push(value)  // adds the value of the button to the array
        newEquation = equation.join('')
        display.textContent = newEquation
    }
}

buttons.forEach(button => button.addEventListener('click', (e) => calculate(button)))
