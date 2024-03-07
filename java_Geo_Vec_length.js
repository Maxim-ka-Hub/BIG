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




























function toggleZInput() {
    const dimension = document.getElementById('dimension').value;
    const zInput = document.getElementById('z');
    const zLabel = document.getElementById('zLabel');

    if (dimension === '3') {
        zInput.classList.remove('hidden');
        zLabel.classList.remove('hidden');
    } else {
        zInput.classList.add('hidden');
        zLabel.classList.add('hidden');
    }
}

function calculateVectorLength() {
const dimension = parseInt(document.getElementById('dimension').value);
const x = parseFloat(document.getElementById('x').value);
const y = parseFloat(document.getElementById('y').value);
const z = parseFloat(document.getElementById('z').value);

let result = 0;
if (dimension === 2 && !isNaN(x) && !isNaN(y)) {
result = Math.sqrt(x*x + y*y);
document.getElementById('result').innerText = `Довжина вектора: ${result.toFixed(2)}`;
} else if (dimension === 3 && !isNaN(x) && !isNaN(y) && !isNaN(z)) {
result = Math.sqrt(x*x + y*y + z*z);
document.getElementById('result').innerText = `Довжина вектора: ${result.toFixed(2)}`;
} else {
document.getElementById('result').innerText = "Будь ласка, введіть коректні координати.";
}
}