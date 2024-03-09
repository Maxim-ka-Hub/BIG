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












function toggleInputs() {
    var shape = document.getElementById('shape').value;
    var inputLabels = document.getElementById('input-fields').getElementsByTagName('label');
    var inputFields = document.getElementById('input-fields').getElementsByTagName('input');

    // Спочатку ховаємо всі лейбли та поля вводу
    for (var i = 0; i < inputLabels.length; i++) {
        inputLabels[i].style.display = 'none';
    }
    for (var j = 0; j < inputFields.length; j++) {
        inputFields[j].style.display = 'none';
    }

    // Показуємо лейбли та поля вводу відповідно до обраної фігури
    if (shape === 'square') {
        document.getElementById('side1').style.display = 'block';
        document.querySelector('label[for="side1"]').style.display = 'block';

    } else if (shape === 'rectangle') {
        document.getElementById('side1').style.display = 'block';
        document.querySelector('label[for="side1"]').style.display = 'block';
        document.getElementById('side2').style.display = 'block';
        document.querySelector('label[for="side2"]').style.display = 'block';

    } else if (shape === 'rhombus') {
        document.getElementById('side1').style.display = 'block';
        document.querySelector('label[for="side1"]').style.display = 'block';
        
    
    } else if (shape === 'parallelogram') {
        document.getElementById('side1').style.display = 'block';
        document.querySelector('label[for="side1"]').style.display = 'block';
        document.getElementById('side2').style.display = 'block';
        document.querySelector('label[for="side2"]').style.display = 'block';


    } else if (shape === 'trapezoid') {
        document.getElementById('side1').style.display = 'block';
        document.querySelector('label[for="side1"]').style.display = 'block';
        document.getElementById('side2').style.display = 'block';
        document.querySelector('label[for="side2"]').style.display = 'block';
        document.getElementById('side3').style.display = 'block';
        document.querySelector('label[for="side3"]').style.display = 'block';
        document.getElementById('side4').style.display = 'block';
        document.querySelector('label[for="side4"]').style.display = 'block';


    } else if (shape === 'trapezoid') {
        document.getElementById('r').style.display = 'block';
        document.querySelector('label[for="r"]').style.display = 'block';
    }
}






function calculateArea() {
    var shape = document.getElementById('shape').value;
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);
    var side4 = parseFloat(document.getElementById('side4').value);
    var r = parseFloat(document.getElementById('r').value);
    var area;

    switch (shape) {
        case 'square':
            area = side1 * 4;
            break;
        case 'rectangle':
            area = (side1 + side2) * 2;
            break;
        case 'parallelogram':
            area = (side1 + side2) * 2;
            break;
        case 'rhombus':
            area = side1 * 4;
            break;
        case 'trapezoid':
            area = side1 + side2 + side3 + side4;
            break;
        case 'Kolo':
            area = 2 * Math.PI * r;
            break;
        default:
            area = 0;
    }

    document.getElementById('result').innerHTML = 'Площа: ' + area.toFixed(2);
}