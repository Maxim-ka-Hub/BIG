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








function calculate() {
    document.getElementById('wholeNumber').innerText = ``
    document.getElementById('remainder').innerText = ``
    document.getElementById('gcd').innerText = ``
    document.getElementById('lcm').innerText = ``
    document.getElementById('primeFactors').innerText = ``


    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    

    const wholeNumber = Math.floor(num1 / num2);
    const remainder = num1 % num2;
    const gcd = calculateGCD(num1, num2);
    const lcm = (num1 * num2) / gcd;
    const primeFactors1 = primeFactors(num1);
    const primeFactors2 = primeFactors(num2);

    


    document.getElementById('wholeNumber').innerText = `Ціле число від ділення: ${wholeNumber}`;
    document.getElementById('remainder').innerText += `Остача від ділення: ${remainder}`;
    document.getElementById('gcd').innerText += `Найбільший спільний дільник: ${gcd}`;
    document.getElementById('lcm').innerText += `Найменше спільне кратне: ${lcm}`;
    document.getElementById('primeFactors').innerText += `Розклад числа на множники: \n Перше число: ${primeFactors1.join(', ')}\n Друге число: ${primeFactors2.join(', ')}`;
}

function calculateGCD(x, y) {
    if (y === 0) {
        return x;
    }
    return calculateGCD(y, x % y);
}

function primeFactors(n) {
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    return factors;
}







function calculate() {
    document.getElementById('wholeNumber').innerText = ``
    document.getElementById('remainder').innerText = ``
    document.getElementById('gcd').innerText = ``
    document.getElementById('lcm').innerText = ``
    document.getElementById('primeFactors').innerText = ``


    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    

    const wholeNumber = Math.floor(num1 / num2);
    const remainder = num1 % num2;
    const gcd = calculateGCD(num1, num2);
    const lcm = (num1 * num2) / gcd;
    const primeFactors1 = primeFactors(num1);
    const primeFactors2 = primeFactors(num2);

    


    document.getElementById('wholeNumber').innerText = `Ціле число від ділення: ${wholeNumber}`;
    document.getElementById('remainder').innerText += `Остача від ділення: ${remainder}`;
    document.getElementById('gcd').innerText += `Найбільший спільний дільник: ${gcd}`;
    document.getElementById('lcm').innerText += `Найменше спільне кратне: ${lcm}`;
    document.getElementById('primeFactors').innerText += `Розклад числа на множники: \n Перше число: ${primeFactors1.join(', ')}\n Друге число: ${primeFactors2.join(', ')}`;
}

function calculateGCD(x, y) {
    if (y === 0) {
        return x;
    }
    return calculateGCD(y, x % y);
}

function primeFactors(n) {
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    return factors;
}