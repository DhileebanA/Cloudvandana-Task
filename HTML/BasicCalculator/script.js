const operators = ["+", "-", "x", "÷"];
var sc = document.getElementById("screen");
var button = document.getElementsByClassName("button");
var beforeOperator, afterOperator;
var newEntry = false;

// Loop through each buttons.
for (let i = 0; i < button.length; i++) {

    // Creating a event listener when button clicked.
    button[i].addEventListener("click", function () {
        let value = sc.value;
        let num = button[i].textContent;

        // Screen clear.
        if (num == "AC") {
            value = "";
        }
        // Arithmatic operations are done by this block of code replacing the eval method.
        else if (operators.includes(num) || num == "=") {
            if (value.includes("+") || value.includes("-") || value.includes("x") || value.includes("÷")) {
                if (value.includes("+")) {
                    let operatorIndex = value.indexOf("+"); // Using indexOf method to identify the operator's index value.
                    afterOperator = value.slice(operatorIndex + 1); // Using slice method to store the value after the operator.
                    value = add(beforeOperator, afterOperator);
                } else if (value.includes("-")) {
                    let operatorIndex = value.indexOf("-");
                    afterOperator = value.slice(operatorIndex + 1);
                    value = subtract(beforeOperator, afterOperator);
                } else if (value.includes("x")) {
                    let operatorIndex = value.indexOf("x");
                    afterOperator = value.slice(operatorIndex + 1);
                    value = multiply(beforeOperator, afterOperator);
                } else if (value.includes("÷")) {
                    let operatorIndex = value.indexOf("÷");
                    afterOperator = value.slice(operatorIndex + 1);
                    value = divide(beforeOperator, afterOperator);
                }
            }
            beforeOperator = value;     // Store the value before pressing the operator.
            if (num != "=") {       // This If statement will ensure the operator is concadinate or not after the calculation.
                value += num;
                newEntry = false;
            } else {
                newEntry = true;    // This will change after press the equal sign.
            }
        } else {
            if (newEntry) {     // After pressing the Equal sign newEntry will be true and a new calculation will start.
                value = num;
                newEntry = false;
            } else {
                value += num;
            }
        }
        sc.value = value;       // To display the entered or calculated value.
    })
}

// Arithmatic functions
function add(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}
function subtract(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}
function multiply(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}
function divide(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 / num2;
}