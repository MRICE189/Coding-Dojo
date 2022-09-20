var display = 0;
var storedValues = {
    "value1" : 0,
    "value2" : null,
    "operator" : null
};
var storing = false;

function displayResult() {
    var displayDiv = document.querySelector('#display');
    displayDiv.innerText = display;
}

function press(n) {
    if (display == 0) {
        display = n;
        displayResult();
    }
    else if (display == storedValues.value2) {
        display = n;
        displayResult();
    }
    else {
        display+=`${n}`;
        displayResult();
        display = parseFloat(display);
    }
}

function setOP(operator) {
    if (!storing) {
        storedValues.value1 = display;
        display = 0;
        storedValues.operator = operator;
        storing = true;
    }
    else {
        storedValues.operator = operator;
    }
}

function calculate() {
    value1 = storedValues.value1;
    storedValues.value2 = display;
    value2 = storedValues.value2;
    if (storedValues.operator == "-") {
        var result = value1 - value2;
    }
    else if (storedValues.operator == "+") {
        var result = value1 + value2;
    }
    else if (storedValues.operator == "/") {
        var result = value1 / value2;
    }
    else if (storedValues.operator == "*") {
        var result = value1 * value2;
    }
    display = result;
    displayResult();
    storedValues.value1 = result;
    display = storedValues.value2;
    storing = true;
}

function clr() {
    storing = false;
    storedValues.value1 = 0;
    storedValues.value2 = null;
    storedValues.operator = null;
    display = 0;
    displayResult();
}