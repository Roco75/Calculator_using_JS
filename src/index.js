var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = "";
var operand2 = "";
var operator = "";

function calculate() {
    var value = this.getAttribute("data-value");
    if (value === "C") {
        operand1 = "";
        operand2 = "";
        operator = "";
        display.innerText = "0";
    } else if (value === "=") {
        if (operand1 !== "" && operator !== "" && operand2 !== "") {
            display.innerText = eval(operand1 + operator + operand2);
            operand1 = display.innerText;
            operand2 = "";
            operator = "";
        }
    } else if (value === "%") {
        operand1 = (parseFloat(operand1) / 100).toString();
        display.innerText = operand1;
    } else if (value === "±") {
        operand1 = (parseFloat(operand1) * -1).toString();
        display.innerText = operand1;
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
        if (operand1 !== "") {
            operator = value;
        }
    } else {
        if (operator === "") {
            operand1 += value;
            display.innerText = operand1;
        } else {
            operand2 += value;
            display.innerText = operand2;
        }
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", calculate);
}