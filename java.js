let displayValue = '';
    
function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function PlusMinus() {
    if (displayValue !== '' && displayValue !== 'Error') {
        displayValue = -parseFloat(displayValue);
        document.getElementById('display').value = displayValue;
    }
}

function x_square() {
    if (displayValue !== '' && displayValue !== 'Error') {
        displayValue = parseFloat(displayValue) **2;
        document.getElementById('display').value = displayValue;
    }
}

function sqrt() {
    if (displayValue !== '' && displayValue !== 'Error') {
        displayValue = Math.sqrt(parseFloat(displayValue));
        document.getElementById('display').value = displayValue;
    }
}

function deleteLast() { 
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}



function Convert() {
    const meters = parseFloat(document.getElementById('inputMeters').value);
    const centimeters = meters * 100;
    const millimeters = meters * 1000;
    const kilometers = meters / 1000;

    document.getElementById('outputCentimeters').value = centimeters.toFixed(2);
    document.getElementById('outputMillimeters').value = millimeters.toFixed(2);
    document.getElementById('outputKilometers').value = kilometers.toFixed(6);
}