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

function operate(operator, a, b){
    switch (operator) {
        case "+":
            console.log(add(a, b));
            break;
        case "-":
            console.log(subtract(a, b));
            break;
        case "*":
            console.log(multiply(a, b));
            break;
        case "/":
            dconsole.log(divide(a, b));
            break;
        default:
            console.log("Invalid operator");
            break;
    }
}

// for checking correct buttons are selected
const operators = document.querySelectorAll(".number");
operators.forEach((op) => {
    op.style.backgroundColor = "white";
})