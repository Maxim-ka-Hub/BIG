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
            const height1 = parseFloat(document.getElementById('height1').value);
            area = 0.5 * base1 * height1;
            break;
        case 2:
            const sideA2 = parseFloat(document.getElementById('sideA2').value);
            const sideB2 = parseFloat(document.getElementById('sideB2').value);
            const sideC2 = parseFloat(document.getElementById('sideC2').value);
            const semiPerimeter2 = (sideA2 + sideB2 + sideC2) / 2;
            area = Math.sqrt(semiPerimeter2 * (semiPerimeter2 - sideA2) * (semiPerimeter2 - sideB2) * (semiPerimeter2 - sideC2));
            break;
        case 3:
            const side3 = parseFloat(document.getElementById('side3').value);
            const angle3 = parseFloat(document.getElementById('angle3').value);
            area = 0.5 * side3 * side3 * Math.sin(angle3 * Math.PI / 180);
            break;
        case 4:
            const side4 = parseFloat(document.getElementById('side4').value);
            const height4 = parseFloat(document.getElementById('height4').value);
            area = 0.5 * side4 * height4;
            break;
        case 5:
            const sideA5 = parseFloat(document.getElementById('sideA5').value);
            const sideB5 = parseFloat(document.getElementById('sideB5').value);
            const angle5 = parseFloat(document.getElementById('angle5').value);
            area = 0.5 * sideA5 * sideB5 * Math.sin(angle5 * Math.PI / 180);
            break;
        case 6:
            const sider6 = parseFloat(document.getElementById('sider6').value);
            const sidep6 = parseFloat(document.getElementById('sidep6').value);
            area = sider6 * sidep6;
            break;
        case 7:
            const sideA7 = parseFloat(document.getElementById('sideA7').value);
            const sideB7 = parseFloat(document.getElementById('sideB7').value);
            const angle7 = parseFloat(document.getElementById('angle7').value);
            area = 0.5 * sideA7 * sideB7 * Math.sin(angle7 * Math.PI / 180);
            break;
        case 8:
            const sideA8 = parseFloat(document.getElementById('sideA8').value);
            const sideB8 = parseFloat(document.getElementById('sideB8').value);
            const sideC8 = parseFloat(document.getElementById('sideC8').value);
            const radius7 = parseFloat(document.getElementById('radius8').value);
            area = (sideA8 * sideB8 * sideC8) / (4 * radius7);
            break;
            
        case 9:
            const radius9 = parseFloat(document.getElementById('radius9').value);
            const angle9 = parseFloat(document.getElementById('angle9').value);
            area = 0.5 * Math.pow(radius9, 2) * Math.sin(angle9 * Math.PI / 180);
            break;
    }
    document.getElementById('result').innerText = `Площа трикутника: ${area}`;
}