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
    a = Number(a);
    b = Number(b);
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
            if(b == 0){
                alert("You cannot divide by 0.");
                clearAll();
                ans = 0;
            }
            else ans = divide(a, b);
            break;
        case "%":
            if(b == 0){
                alert("You cannot divide by 0.");
                clearAll();
                ans = 0;
            }
            else ans = mod(a, b);
        default:
            console.log("Invalid operator");
            break;
    }
    return ans;
}

function clearAll() {
    document.querySelector(".ac").click();
}

function textAreaUpdate(number){
    const answer = document.querySelector(".answer");
    let value = answer.textContent;
    if(operatorToggle){
        answer.textContent = value;
        if(numberToggle){
            value = '';
            value += number;
            answer.textContent = value;
        }
        operatorToggle = false;
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

function isDecimalPresent(){
    let value = answer.textContent;
    value = value.split("");
    if(value.includes(".")){
        return true;
    }
    return false;
}

function numbersEventListener() {
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            numberToggle = true;
            if(number.textContent === "."){
                if(!decimalToggle){
                    textAreaUpdate(number.textContent);  
                }
            }
            else{
                textAreaUpdate(number.textContent);
            }
            if(isDecimalPresent()){
                decimalToggle = true;
            }
        });
    });
}

function operatorsEventListener(){
    const operators = document.querySelectorAll(".operator");
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            operatorToggle = true;
            decimalToggle = false;
            equalToggle = true;
            numberToggle = false;
            if(answer.textContent.trim() === ""){
                inputOperator = operator.textContent;
                historyTextUpdate(oldValue, inputOperator, false);
            }
            if(operatorsArray.includes(history.textContent.slice(-1)) && answer.textContent !== ""){
                operatorEqual();
                inputOperator = operator.textContent;
                historyTextUpdate(oldValue, inputOperator, false);
                answer.textContent = "";
            }
            else if(answer.textContent !== ""){
                inputOperator = operator.textContent;
                oldValue = answer.textContent;
                historyTextUpdate(oldValue, inputOperator, false);
                answer.textContent = "";
            }
        });
    });
}

function equalEventListener(){
    const equal = document.querySelector(".equal");
    equal.addEventListener('click', () => {
        if(equalToggle && answer.textContent !== ""){
            newValue = answer.textContent;
            historyTextUpdate(newValue, "=", true);
            answer.textContent = operate(oldValue, inputOperator, newValue);
        }
        equalToggle = false;
    });
}

function backSpaceEventListener(){
    const backSpace = document.querySelector(".bc");
    backSpace.addEventListener('click', () => {
        let value = answer.textContent;
        if(value != ""){
            value = value.slice(0, -1);
        }
        answer.textContent = value;
        if(isDecimalPresent()){
            decimalToggle = true;
        }
        else{
            decimalToggle = false;
        }
    });
}

function allClearEventListener(){
    const allClear = document.querySelector(".ac");
    allClear.addEventListener('click', () => {
        oldValue = 0;
        inputOperator = '';
        newValue = 0;
        operatorToggle = false;
        numberToggle = false;
        decimalToggle = false;
        equalToggle = false;
        answer.textContent = "0";
        history.textContent = "";
    });
}

function plusMinusEventListener(){
    const plusMinus = document.querySelector(".plusMinus");
    plusMinus.addEventListener('click', () => {
        let value = answer.textContent;
        if(value.charAt(0) !== "-"){
            value = "-" + value;
        }
        else if(value.charAt(0) === "-"){
            value = value.slice(1);
        }
        answer.textContent = value;
    });  
}


/*******************************/

let oldValue = 0;
let inputOperator = '';
let newValue = 0;
let operatorToggle = false;
let numberToggle = false;
let decimalToggle = false;
let equalToggle = false;
let operatorsArray = ["+", "-", "×", "÷", "%"];

let answer = document.querySelector(".answer");
let history = document.querySelector(".count");

numbersEventListener();
operatorsEventListener();
equalEventListener();
backSpaceEventListener();
allClearEventListener();
plusMinusEventListener();