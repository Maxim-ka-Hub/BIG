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

function one_del_x() {
    if (displayValue !== '' && displayValue !== 'Error') {
        displayValue = 1/parseFloat(displayValue);
        document.getElementById('display').value = displayValue;
    }
}












function calculateScalarProduct() {
    var vector1Input = document.getElementById('vector1').value;
    var vector2Input = document.getElementById('vector2').value;
    var vector1 = vector1Input.split(',').map(parseFloat);
    var vector2 = vector2Input.split(',').map(parseFloat);

    // Перевірка на введення коректних значень
    if (vector1.some(isNaN) || vector2.some(isNaN) || vector1.length !== vector2.length) {
        document.getElementById('result').textContent = 'Будь ласка, введіть коректні дані (однакові розмірності векторів).';
        return;
    }

    var scalarProduct = 0;
    for (var i = 0; i < vector1.length; i++) {
        scalarProduct += vector1[i] * vector2[i];
    }

    document.getElementById('result').textContent = 'Скалярний добуток: ' + scalarProduct;
}