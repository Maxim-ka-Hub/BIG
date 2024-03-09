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



function calculateArea(method) {
    let area;
    switch (method) {
        case 1:
            const base1 = parseFloat(document.getElementById('base1').value);
            area = base1**2;
            break;
        case 2:
            const sideA2 = parseFloat(document.getElementById('sideA2').value);
            const sideB2 = parseFloat(document.getElementById('sideB2').value);
            area = sideA2 * sideB2;
            break;
        case 3:
            const side3 = parseFloat(document.getElementById('side3').value);
            const angle3 = parseFloat(document.getElementById('angle3').value);
            area = side3 * angle3;
            break;
        case 4:
            const side4 = parseFloat(document.getElementById('side4').value);
            const height4 = parseFloat(document.getElementById('height4').value);
            area = (side4 * height4) / 2;
            break;
        case 5:
            const sideA5 = parseFloat(document.getElementById('sideA5').value);
            const sideB5 = parseFloat(document.getElementById('sideB5').value);
            area = (sideA5 /2) / sideB5;
            break;
    }
    document.getElementById('result').innerText = `Площа трикутника: ${area}`;
}