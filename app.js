const body = document.querySelector('body');
const button = document.createElement('button');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) {
    if (y === 0) return "Oh no, You should know better..."
    return x / y; 
}
function operate(op, x, y) { return op(x, y); }

function populateDisplay() {
    let num = '', x, y, op;
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.classList.contains('num')) {
                num += e.target.innerHTML;
                display.textContent = num;
            } if (button.classList.contains('op')) {
                if (x) {
                    y = Number(num);
                    if (typeof op === "function") num = operate(op, x, y);
                    display.textContent = num;
                }
                op = window[e.target.classList[1]];
                x = Number(num);
                num = '';
            } if (button.classList.contains('equal')) {
                y = Number(num);
                if (typeof op === "function") num = operate(op, x, y);
                display.textContent = num;
                x = '', y = '';
            } if (button.classList.contains('clear')) {
                num = '', x = '', y = '';
                display.textContent = num;
            }
        });
    });
}

populateDisplay();


