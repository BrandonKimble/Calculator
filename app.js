const body = document.querySelector('body');
const button = document.createElement('button');

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

function operate(op, x, y) { return op(x, y); }


