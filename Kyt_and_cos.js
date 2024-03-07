let displayValue = '';


function appendOperator(operator) {
    const operators = ['+', '-', '*', '/'];

    // Видаляємо всі пробіли з кінця введеного виразу
    const trimmedValue = displayValue.trim();
    const lastChar = trimmedValue[trimmedValue.length - 1]; // Отримуємо останній символ

    // Перевіряємо, чи останній символ - це оператор
    if (operators.includes(lastChar)) {
        // Якщо так, то замінюємо його на новий оператор
        displayValue = trimmedValue.slice(0, -1) + operator;
    } else {
        // Інакше, просто додаємо новий оператор до виразу
        displayValue += operator;
    }

    document.getElementById('display').value = displayValue;
}
    
function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;

}


function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function equal() {
    try{
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
        appendNumber('.');
        deleteLast();
        if (document.getElementById('display').value == 'undefined'){
            clearDisplay();
            document.getElementById('display').ariaPlaceholder = 'undefined';
        }
    } catch (error) {
        document.getElementById('display').value = '';
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
        appendNumber('.');
        deleteLast();
    }
}

function sqrt() {
    if (displayValue !== '' && displayValue !== 'Error') {
        displayValue = Math.sqrt(parseFloat(displayValue));
        document.getElementById('display').value = displayValue;
        appendNumber('.');
        deleteLast();
    }
}

function deleteLast() { 
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function OneDelX() {
    displayValue = 1/displayValue
    document.getElementById('display').value = displayValue;
    appendNumber('.');
    deleteLast();
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