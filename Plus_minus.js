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