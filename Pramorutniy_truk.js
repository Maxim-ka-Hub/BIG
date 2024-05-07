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








function Find() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let alpha = parseFloat(document.getElementById('alpha').value);
    let x_alpha = alpha * (Math.PI / 180);
    let beta = parseFloat(document.getElementById('beta').value);
    let x_beta = beta * (Math.PI / 180);
    let result = document.getElementById('result');


    if (!isNaN(c) && !isNaN(beta)) {
        document.getElementById('c-res').innerHTML = c;
        document.getElementById('beta-res').innerHTML = beta;

        document.getElementById('a-res').innerHTML = "";
        document.getElementById('b-res').innerHTML = "";
        document.getElementById('alpha-res').innerHTML = "";
        
        result.innerHTML = `Дано: ▲ABC - прямокутний(за умовою)<br>
        ⌞AB - ${c}см; ⌞B - ${beta}∘; ⌞C - 90∘<br>
        Знайти ⌞A-?; ⌞BC-?; ⌞AC-?<br>
        Розвязання<br>
        1) ⌞A = ⌞C - ${beta} = ${90 - beta}∘<br>
        2) BC = AB * cosB = ${c * Math.cos(x_beta)}<br>
        3) AC = AB * sinB = ${c * Math.sin(x_beta)}`
    }

    else if (!isNaN(b) && !isNaN(beta)) {
        document.getElementById('b-res').innerHTML = b;
        document.getElementById('beta-res').innerHTML = beta;

        document.getElementById('a-res').innerHTML = "";
        document.getElementById('c-res').innerHTML = "";
        document.getElementById('alpha-res').innerHTML = "";

        result.innerHTML = `Дано: ▲ABC - прямокутний(за умовою)<br>
        ⌞AC - ${b}см; ⌞B - ${beta}∘; ⌞C - 90∘<br>
        Знайти ⌞A-?; ⌞AB-?; ⌞BC-?<br>
        Розвязання<br>
        1) ⌞A = ⌞C - ${beta} = ${90 - beta}∘<br>
        2) AB = AC / sinB = ${b / Math.sin(x_beta)}<br>
        3) BC = AC / tgB = ${b / Math.tan(x_beta)}`
    }

    else if (!isNaN(b) && !isNaN(alpha)) {
        document.getElementById('b-res').innerHTML = b;
        document.getElementById('alpha-res').innerHTML = alpha;

        document.getElementById('a-res').innerHTML = "";
        document.getElementById('c-res').innerHTML = "";
        document.getElementById('beta-res').innerHTML = "";

        result.innerHTML = `Дано: ▲ABC - прямокутний(за умовою)<br>
        ⌞AC - ${b}см; ⌞A - ${alpha}∘; ⌞C - 90∘<br>
        Знайти ⌞B-?; ⌞BC-?; ⌞AB-?<br>
        Розвязання<br>
        1) ⌞B = ⌞C - ${alpha} = ${90 - alpha}∘<br>
        2) AB = AC / cosA = ${b / Math.cos(x_alpha)}<br>
        3) BC = AC * tgA = ${b / Math.tan(x_alpha)}`
    }


    else if (!isNaN(b) && !isNaN(c)) {
        document.getElementById('c-res').innerHTML = c;
        document.getElementById('b-res').innerHTML = b;

        document.getElementById('a-res').innerHTML = "";
        document.getElementById('alpha-res').innerHTML = "";
        document.getElementById('beta-res').innerHTML = "";

        let ax = Math.asin(b/c) * (Math.PI / 180);
        result.innerHTML = `Дано: ▲ABC - прямокутний(за умовою)<br>
        ⌞AC - ${b}см; ⌞AB - ${c}; ⌞C - 90∘<br>
        Знайти ⌞A-?; ⌞BC-?; ⌞B-?<br>
        Розвязання<br>
        1) BC = √(c² - b²) = ${Math.sqrt(c**2 - b**2)}<br>
        2) sinB = b / c = ${b/c}<br>
        3) ⌞A =  ⌞C - ⌞A = ${90 - ax}`

    }

    else if (!isNaN(b) && !isNaN(a)) {
        document.getElementById('b-res').innerHTML = a;
        document.getElementById('a-res').innerHTML = b;

        document.getElementById('c-res').innerHTML = "";
        document.getElementById('alpha-res').innerHTML = "";
        document.getElementById('beta-res').innerHTML = "";

        let tx = Math.atan(b/a) * (Math.PI / 180);
        result.innerHTML = `Дано: ▲ABC - прямокутний(за умовою)<br>
        ⌞AC - ${b}см; ⌞BC - ${a}; ⌞C - 90∘<br>
        Знайти AB-?; ⌞A-?; ⌞B-?<br>
        Розвязання<br>
        1) AB = √(b² + a²) = ${Math.sqrt(b**2 - a**2)}<br>
        2) tgB = b / a = ${b/a}<br>
        3) ⌞A =  ⌞C - ⌞B = ${90 - tx}`
    }

    else {
        result.innerHTML = `Помилка`
    }
}




