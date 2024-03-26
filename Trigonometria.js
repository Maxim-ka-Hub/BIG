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



function convertToRadians() {
    var degrees = parseFloat(document.getElementById('degrees').value);
    var radians = degrees * (Math.PI / 180);
    document.getElementById('radians').value = radians.toFixed(4);
}

function convertToDegrees() {
    var radians = parseFloat(document.getElementById('radians').value);
    var degrees = radians * (180 / Math.PI);
    document.getElementById('degrees').value = degrees.toFixed(4);
}




function calculateTrigFunctions() {
    var angle = parseFloat(document.getElementById('angle').value);
    var radians = angle * (Math.PI / 180);
    var sinValue = Math.sin(radians);
    var cosValue = Math.cos(radians);
    var tanValue = Math.tan(radians);
    var cotValue = 1 / Math.tan(radians); // котангенс - обернена величина тангенса

    document.getElementById('result_1').innerHTML = '<strong>Синус (' + angle + '°):</strong> ' + sinValue.toFixed(4) + '<br>' +
                                                    '<strong>Косинус (' + angle + '°):</strong> ' + cosValue.toFixed(4) + '<br>' +
                                                    '<strong>Тангенс (' + angle + '°):</strong> ' + tanValue.toFixed(4) + '<br>' +
                                                    '<strong>Котангенс (' + angle + '°):</strong> ' + cotValue.toFixed(4);
}




function calculateTrigFunctions_1() {
    var angle = parseFloat(document.getElementById('angle').value);
    var radians = angle * (Math.PI / 180);
    var sinValue = Math.sin(radians);
    var cosValue = Math.cos(radians);
    var tanValue = Math.tan(radians);
    var cotValue = 1 / Math.tan(radians); // котангенс - обернена величина тангенса

    document.getElementById('result_2').innerHTML = '<strong>Синус (' + angle + '°):</strong> ' + sinValue.toFixed(4) + '<br>' +
                                                    '<strong>Косинус (' + angle + '°):</strong> ' + cosValue.toFixed(4) + '<br>' +
                                                    '<strong>Тангенс (' + angle + '°):</strong> ' + tanValue.toFixed(4) + '<br>' +
                                                    '<strong>Котангенс (' + angle + '°):</strong> ' + cotValue.toFixed(4);
    
    // Показати секцію для обчислення кута за значеннями тригонометричних функцій
    document.getElementById('inverseResult').style.display = 'block';
}

function calculateInverseTrigFunctions() {
    var sinValue = parseFloat(document.getElementById('sinValue').value);
    var cosValue = parseFloat(document.getElementById('cosValue').value);
    var tanValue = parseFloat(document.getElementById('tanValue').value);
    var cotValue = parseFloat(document.getElementById('cotValue').value);
    
    // Знаходження кута за значеннями тригонометричних функцій
    var angleInRadians;
    if (!isNaN(sinValue) && !isNaN(cosValue)) {
        angleInRadians = Math.atan2(sinValue, cosValue);
    } else if (!isNaN(tanValue)) {
        angleInRadians = Math.atan(tanValue);
    } else if (!isNaN(cotValue)) {
        angleInRadians = Math.atan(1 / cotValue);
    } else {
        document.getElementById('inverseResultValue').innerHTML = "Введіть коректні значення.";
        return;
    }

    var angleInDegrees = angleInRadians * (180 / Math.PI);
    document.getElementById('inverseResultValue').innerHTML = 'Кут: ' + angleInDegrees.toFixed(4) + '°';
}