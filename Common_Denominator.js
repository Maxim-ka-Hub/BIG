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




function findGCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return findGCD(b, a % b);
    }
}

function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}

function calculateCommonDenominator() {
    var numerator1 = parseInt(document.getElementById("numerator1").value);
    var denominator1 = parseInt(document.getElementById("denominator1").value);
    var numerator2 = parseInt(document.getElementById("numerator2").value);
    var denominator2 = parseInt(document.getElementById("denominator2").value);

    var lcm = findLCM(denominator1, denominator2);
    var commonNumerator1 = numerator1 * (lcm / denominator1);
    var commonNumerator2 = numerator2 * (lcm / denominator2);

    var result = "Common Denominator: " + lcm + "<br>";
    result += "Equivalent Numerator 1: " + commonNumerator1 + "<br>";
    result += "Equivalent Numerator 2: " + commonNumerator2;

    document.getElementById("result").innerHTML = result;
}