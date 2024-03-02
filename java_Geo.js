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
const z1Input = document.getElementById('z1');
const z2Input = document.getElementById('z2');
const z1Label = document.getElementById('zLabel');
const z2Label = document.getElementById('z2Label');

if (dimension === '2') {
    z1Input.classList.add('hidden');
    z2Input.classList.add('hidden');
    z1Label.classList.add('hidden');
    z2Label.classList.add('hidden');
} else {
    z1Input.classList.remove('hidden');
    z2Input.classList.remove('hidden');
    z1Label.classList.remove('hidden');
    z2Label.classList.remove('hidden');
}
}

function calculateVector() {
const x1 = parseFloat(document.getElementById('x1').value);
const y1 = parseFloat(document.getElementById('y1').value);
const x2 = parseFloat(document.getElementById('x2').value);
const y2 = parseFloat(document.getElementById('y2').value);
const dimension = parseInt(document.getElementById('dimension').value);

const vector = [x2 - x1, y2 - y1];
if (dimension === 3) {
    const z1 = parseFloat(document.getElementById('z1').value);
    const z2 = parseFloat(document.getElementById('z2').value);
    vector.push(z2 - z1);
}

const resultElement = document.getElementById('result');
resultElement.innerText = `Vector: (${vector.join(', ')})`;

// Animate the result
resultElement.style.opacity = '0';
setTimeout(() => {
    resultElement.style.opacity = '1';
}, 100);
}




