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


















function multiplyVector() {
    var vectorInput = document.getElementById('vector').value;
    var scalarInput = parseFloat(document.getElementById('scalar').value);
    var vector = vectorInput.split(',').map(parseFloat);

    // Перевірка на введення коректних значень
    if (vector.some(isNaN) || isNaN(scalarInput)) {
        document.getElementById('result').textContent = 'Будь ласка, введіть коректні дані.';
        return;
    }

    var result = vector.map(function (element) {
        return element * scalarInput;
    });

    document.getElementById('result').textContent = 'Результат: ' + result.join(', ');
}