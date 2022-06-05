function add (a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function mod(a, b){
    return a % b;
}

function operate(a, operator, b){
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case "+":
            ans = add(a, b);
            break;
        case "-":
            ans = subtract(a, b);
            break;
        case "×":
            ans = multiply(a, b);
            break;
        case "÷":
            ans = divide(a, b);
            break;
        case "%":
            ans = mod(a, b);
        default:
            console.log("Invalid operator");
            break;
    }
    return ans;
}

function textAreaUpdate(number){
    const answer = document.querySelector(".answer");
    let value = answer.textContent;
    value += number;
    answer.textContent = value;
}

function historyTextUpdate(value, operator){
    const history = document.querySelector(".count");
    history.textContent = value + " " + operator;
}

/*******************************/

let oldValue = 0;
let inputOperator;
let newValue = 0;

const answer = document.querySelector(".answer");


const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        textAreaUpdate(number.textContent);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        oldValue = answer.textContent;
        inputOperator = operator.textContent;
        answer.textContent = '';
    });
});

const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    newValue = answer.textContent;
    console.log(oldValue + " " + inputOperator + " " + newValue);
    answer.textContent = operate(oldValue, inputOperator, newValue);
});