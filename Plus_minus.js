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













function toggleZInputs() {
    const dimension = document.getElementById('dimension').value;
    const z1Container = document.getElementById('z1Container');
    const z2Container = document.getElementById('z2Container');

    if (dimension === '3') {
        z1Container.style.display = 'inline-block';
        z2Container.style.display = 'inline-block';
    } else {
        z1Container.style.display = 'none';
        z2Container.style.display = 'none';
        document.getElementById('z1').value = '';
        document.getElementById('z2').value = '';
    }
}

function addVectors() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    let z1, z2;

    if (document.getElementById('dimension').value === '3') {
        z1 = parseFloat(document.getElementById('z1').value);
        z2 = parseFloat(document.getElementById('z2').value);
        const resultX = x1 + x2;
        const resultY = y1 + y2;
        const resultZ = z1 + z2;

        document.getElementById('result').innerText = `Результат додавання: (${resultX}, ${resultY}, ${resultZ})`;
    } else {
        const resultX = x1 + x2;
        const resultY = y1 + y2;
        

    document.getElementById('result').innerText = `Результат додавання: (${resultX}, ${resultY})`;
    }

    
}

function subtractVectors() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    let z1, z2;

    if (document.getElementById('dimension').value === '3') {
        z1 = parseFloat(document.getElementById('z1').value);
        z2 = parseFloat(document.getElementById('z2').value);
        const resultX = x1 - x2;
        const resultY = y1 - y2;
        const resultZ = z1 - z2;

        document.getElementById('result').innerText = `Результат віднімання: (${resultX}, ${resultY}, ${resultZ})`;
    } else {
        const resultX = x1 - x2;
        const resultY = y1 - y2;
        document.getElementById('result').innerText = `Результат віднімання: (${resultX}, ${resultY})`;
    }

    
}