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
    var inputFields = document.getElementById('input-fields').getElementsByTagName('input');
    var labels = document.getElementById('input-fields').getElementsByTagName('label');

    // Спочатку ховаємо всі поля вводу та лейбли
    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].style.display = 'none';
    }
    for (var j = 0; j < labels.length; j++) {
        labels[j].style.display = 'none';
    }

    // Відображаємо лише необхідні поля вводу та лейбли залежно від обраної фігури
    if (shape === 'cube' || shape === 'sphere') {
        document.getElementById('side').style.display = 'block';
        document.querySelector('label[for="side"]').style.display = 'block';
    } else if (shape === 'prism' || shape === 'pyramid') {
        document.getElementById('length').style.display = 'block';
        document.querySelector('label[for="length"]').style.display = 'block';
        document.getElementById('width').style.display = 'block';
        document.querySelector('label[for="width"]').style.display = 'block';
        document.getElementById('height').style.display = 'block';
        document.querySelector('label[for="height"]').style.display = 'block';
    } else if (shape === 'rectangularPrism' || shape === 'parallelepiped' || shape === 'tetrahedron') {
        document.getElementById('length').style.display = 'block';
        document.querySelector('label[for="length"]').style.display = 'block';
        document.getElementById('width').style.display = 'block';
        document.querySelector('label[for="width"]').style.display = 'block';
        document.getElementById('height').style.display = 'block';
        document.querySelector('label[for="height"]').style.display = 'block';
    } else if (shape === 'cylinder' || shape === 'cone') {
        document.getElementById('radius').style.display = 'block';
        document.querySelector('label[for="radius"]').style.display = 'block';
        if (shape === 'cylinder') {
            document.getElementById('height').style.display = 'block';
            document.querySelector('label[for="height"]').style.display = 'block';
        }
    }
}

function calculate() {
    var shape = document.getElementById('shape').value;
    var volume;
    var side = parseFloat(document.getElementById('side').value);
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var radius = parseFloat(document.getElementById('radius').value);

    switch (shape) {
        case 'cube':
            volume = Math.pow(side, 3);
            break;
        case 'prism':
            volume = length * width * height;
            break;
        case 'rectangularPrism':
            volume = length * width * height;
            break;
        case 'parallelepiped':
            volume = length * width * height;
            break;
        case 'pyramid':
            volume = (1 / 3) * length * width * height;
            break;
        case 'tetrahedron':
            volume = Math.pow(length, 3) / (6 * Math.sqrt(2));
            break;
        case 'sphere':
            volume = (4 / 3) * Math.PI * Math.pow(side, 3);
            break;
        case 'cylinder':
            volume = Math.PI * Math.pow(radius, 2) * height;
            break;
        case 'cone':
            volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
            break;
        default:
            volume = 0;
    }

    document.getElementById('result').innerHTML = 'Об\'єм: ' + volume.toFixed(2);
}