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
    if(operatorsArray.includes(history.textContent.slice(-1))){
        answer.textContent = value;
        if(numberToogle){
            value = '';
            value += number;
            answer.textContent = value;   
        }
    }
    else{
        value += number;
        answer.textContent = value;
    }
}

function historyTextUpdate(number, operator, equalCheck){
    const history = document.querySelector(".count");
    let value = number + " " + operator;
    if(equalCheck === false){
        history.textContent = value;
    }
    else{
        history.textContent += " " + value;
    }
}

function operatorEqual(){
    newValue = answer.textContent;
    let equalValue = operate(oldValue, inputOperator, newValue);
    oldValue = equalValue;
    answer.textContent = equalValue;
}

/*******************************/

let oldValue = 0;
let inputOperator;
let newValue = 0;
let operatorToggle = false;
let numberToogle = false;
let operatorsArray = ["+", "-", "×", "÷", "%"];

const answer = document.querySelector(".answer");
const history = document.querySelector(".count");



const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        numberToogle = true;
        textAreaUpdate(number.textContent);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(operatorsArray.includes(history.textContent.slice(-1))){
            operatorEqual();
            inputOperator = operator.textContent;
            historyTextUpdate(oldValue, inputOperator, false);  
        }
        else{
            inputOperator = operator.textContent;
            oldValue = answer.textContent;
            historyTextUpdate(oldValue, operator.textContent, false);
        }
    });
});

const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    newValue = answer.textContent;
    historyTextUpdate(newValue, "=", true);
    answer.textContent = operate(oldValue, inputOperator, newValue);
});

const backSpace = document.querySelector(".bc");
backSpace.addEventListener('click', () => {
    let value = answer.textContent;
    if(value != ""){
        value = value.slice(0, -1);
    }
    answer.textContent = value;
});

const allClear = document.querySelector(".ac");
allClear.addEventListener('click', () => {
    let oldValue = 0;
    let inputOperator;
    let newValue = 0;
    let operatorToggle = false;
    let numberToogle = false;
    answer.textContent = "";
    history.textContent = "";
});