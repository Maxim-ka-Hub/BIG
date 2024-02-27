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







function calculateAngle() {
    var vector1Input = document.getElementById('vector1').value;
    var vector2Input = document.getElementById('vector2').value;
    var vector1 = vector1Input.split(',').map(parseFloat);
    var vector2 = vector2Input.split(',').map(parseFloat);

    // Перевірка на введення коректних значень
    if (vector1.length !== 3 || vector2.length !== 3 || vector1.some(isNaN) || vector2.some(isNaN)) {
        document.getElementById('result').textContent = 'Будь ласка, введіть коректні дані для обох векторів.';
        return;
    }

    // Обчислення скалярного добутку векторів
    var dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];

    // Обчислення довжин векторів
    var magnitude1 = Math.sqrt(vector1[0] * vector1[0] + vector1[1] * vector1[1] + vector1[2] * vector1[2]);
    var magnitude2 = Math.sqrt(vector2[0] * vector2[0] + vector2[1] * vector2[1] + vector2[2] * vector2[2]);

    // Обчислення косинуса кута між векторами
    var cosineAngle = dotProduct / (magnitude1 * magnitude2);

    // Обчислення кута в радіанах та перетворення його в градуси
    var angleInRadians = Math.acos(cosineAngle);
    var angleInDegrees = angleInRadians * (180 / Math.PI);

    document.getElementById('result').innerHTML = 'Кут між векторами: ' + angleInDegrees.toFixed(2) + ' градусів <br> Косинус кута: ' + cosineAngle.toFixed(2);
}