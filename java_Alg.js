function solveQuadratic() {
    const a = parseFloat(document.getElementById('input-a').value);
    const b = parseFloat(document.getElementById('input-b').value);
    const c = parseFloat(document.getElementById('input-c').value);

    const discriminant = b*b -( 4 *a * c);

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        document.getElementById('Deskreminant').innerText = `D = b² - 4*a*c = ${b*b} - 4 * ${a} * ${c} = ${discriminant}`;

        document.getElementById('sqrt_Deskreminant').innerText = `√D = ${Math.sqrt(discriminant).toFixed(2)}`;

        document.getElementById('x1').innerText = `x1 = (-b - √D) / (2 * a) = (${-b} - ${Math.sqrt(discriminant).toFixed(2)}) / (2 * ${a}) = ${x1.toFixed(2)}`

        document.getElementById('x2').innerText = `x2 = (-b + √D) / (2 * a) = (${-b} + ${Math.sqrt(discriminant).toFixed(2)}) / (2 * ${a}) = ${x2.toFixed(2)}`





    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        document.getElementById('Deskreminant').innerText = `D = b² - 4*a*c = ${b*b} - 4 * ${a} * ${c} = ${discriminant}`;

        document.getElementById('sqrt_Deskreminant').innerText = `√D = ${Math.sqrt(discriminant).toFixed(2)}`;

        document.getElementById('x1').innerText = `x = -b / (2 * a) = ${-b} / (2 * ${a}) = ${x.toFixed(2)}`

        document.getElementById('x2').innerText = ``


    } else {
        document.getElementById('Deskreminant').innerText = `D = b² - 4*a*c = ${b*b} - 4 * ${a} * ${c} = ${discriminant}`;

        document.getElementById('sqrt_Deskreminant').innerText = `√D < 0`;
        
        document.getElementById('x2').innerText = ``

        document.getElementById('x1').innerText = 'Розв\'язків немає (дискримінант від\'ємний)';
    }
}

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














function solveBekvadrat() {
    const a = parseFloat(document.getElementById('input-a_2').value);
    const b = parseFloat(document.getElementById('input-b_2').value);
    const c = parseFloat(document.getElementById('input-c_2').value);
    const d = parseFloat(document.getElementById('input-d_2').value);

    const discriminant = 18 * a * b * c * d - 4 * b**3 * d + b**2 * c**2 - 4 * a * c**3 - 27 * a**2 * d**2;


    if (discriminant > 0) {
        const x1 = Math.cbrt(-b + Math.sqrt(discriminant) / 2)  +  Math.cbrt(-b - Math.sqrt(discriminant) / 2)  - c/3*a;

        document.getElementById('Deskreminant_2').innerText = `18 * a * b * c * d - 4 * b³ * d + b² * c² - 4 * a * c ³ - 27 * a² * d² = 18 * ${a*b*c*d} - 4 * ${b**3} * ${d} + ${b**2} * ${c**2} - 4 * ${a} * ${c**3} - 27 * ${a**2} * ${d**2}= ${discriminant}`;

        document.getElementById('sqrt_Deskreminant_2').innerText = `√D = ${Math.sqrt(discriminant).toFixed(2)}`;

        document.getElementById('x1_2').innerText = `x1 = ∛(-b + √D) / 2 + ∛(-b - √D) / 2 - с/3a = (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2 - ${c} / 3 * ${a}= ${x1.toFixed(2)}`

    }


    else if (discriminant === 0) {
        const x1 = Math.cbrt(-b + Math.sqrt(discriminant) / 2)  +  Math.cbrt(-b - Math.sqrt(discriminant) / 2)  - c/3*a;

        const x2 = - ((Math.cbrt(-b + Math.sqrt(discriminant) / 2)  +  Math.cbrt(-b - Math.sqrt(discriminant) / 2)) /2)  - c/3*a + Math.sqrt(3)/2 * (Math.cbrt(-b + Math.sqrt(discriminant) /2) - Math.cbrt(-b - Math.sqrt(discriminant) /2));

        const x3 = - ((Math.cbrt(-b + Math.sqrt(discriminant) / 2)  +  Math.cbrt(-b - Math.sqrt(discriminant) / 2)) /2)  - c/3*a - Math.sqrt(3)/2 * (Math.cbrt(-b + Math.sqrt(discriminant) /2) - Math.cbrt(-b - Math.sqrt(discriminant) /2));


        document.getElementById('Deskreminant_2').innerText = `18 * a * b * c * d - 4 * b³ * d + b² * c² - 4 * a * c ³ - 27 * a² * d² = 18 * ${a*b*c*d} - 4 * ${b**3} * ${d} + ${b**2} * ${c**2} - 4 * ${a} * ${c**3} - 27 * ${a**2} * ${d**2}= ${discriminant}`;
        document.getElementById('sqrt_Deskreminant_2').innerText = `√D = ${Math.sqrt(discriminant).toFixed(2)}`;

        document.getElementById('x1_2').innerText = `x1 = ∛(-b + √D) / 2 + ∛(-b - √D) / 2 - с/3a = (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2 - ${c} / 3 * ${a}= ${x1.toFixed(2)}`
        
        document.getElementById('x2_2').innerText = `x2 = ∛(-b + √D) / 2 + ∛(-b - √D) / 2 - с/3a = (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2 - ${c} / 3 * ${a}= ${x1.toFixed(2)}`

        document.getElementById('x3_2').innerText = `x3 = (∛(-b + √D) / 2 + ∛(-b - √D) / 2) /2 - с/3a - √3 /2 * (∛(-b + √D) / 2 - ∛(-b - √D) / 2) /2 = (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2 - ${c} / 3 * ${a} - √3 /2 * (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2= ${x1.toFixed(2)}`

    }

    
    else if (discriminant < 0) {
        const x1 = Math.cbrt(-b + Math.sqrt(discriminant) / 2)  +  Math.cbrt(-b - Math.sqrt(discriminant) / 2)  - c/3*a;

        const x2 = - ((Math.cbrt(-b + Math.sqrt(discriminant) / 2)  +  Math.cbrt(-b - Math.sqrt(discriminant) / 2)) /2)  - c/3*a + Math.sqrt(3)/2 * (Math.cbrt(-b + Math.sqrt(discriminant) /2) - Math.cbrt(-b - Math.sqrt(discriminant) /2));

        const x3 = - ((Math.cbrt(-b + Math.sqrt(discriminant) / 2)  +  Math.cbrt(-b - Math.sqrt(discriminant) / 2)) /2)  - c/3*a - Math.sqrt(3)/2 * (Math.cbrt(-b + Math.sqrt(discriminant) /2) - Math.cbrt(-b - Math.sqrt(discriminant) /2));


        document.getElementById('Deskreminant_2').innerText = `18 * a * b * c * d - 4 * b³ * d + b² * c² - 4 * a * c ³ - 27 * a² * d² = 18 * ${a*b*c*d} - 4 * ${b**3} * ${d} + ${b**2} * ${c**2} - 4 * ${a} * ${c**3} - 27 * ${a**2} * ${d**2}= ${discriminant}`;
        document.getElementById('sqrt_Deskreminant_2').innerText = `√D = ${Math.sqrt(discriminant).toFixed(2)}`;

        document.getElementById('x1_2').innerText = `x1 = ∛(-b + √D) / 2 + ∛(-b - √D) / 2 - с/3a = (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2 - ${c} / 3 * ${a}= ${x1.toFixed(2)}`
        
        document.getElementById('x2_2').innerText = `x2 = ∛(-b + √D) / 2 + ∛(-b - √D) / 2 - с/3a = (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2 - ${c} / 3 * ${a}= ${x1.toFixed(2)}`

        document.getElementById('x3_2').innerText = `x3 = (∛(-b + √D) / 2 + ∛(-b - √D) / 2) /2 - с/3a - √3 /2 * (∛(-b + √D) / 2 - ∛(-b - √D) / 2) /2 = (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2 - ${c} / 3 * ${a} - √3 /2 * (∛(${-b} + ${Math.cbrt(discriminant).toFixed(2)}) / 2 + (∛(${-b} - ${Math.cbrt(discriminant).toFixed(2)}) / 2= ${x1.toFixed(2)}`

    }
}









function solveBiKw() {
    const a = parseFloat(document.getElementById('input-a-bi_kw').value);
    const b = parseFloat(document.getElementById('input-b-bi_kw').value);
    const c = parseFloat(document.getElementById('input-c-bi_kw').value);

    const discriminant = b*b -( 4 *a * c);

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        document.getElementById('Deskreminant_bi').innerText = `D = b² - 4*a*c = ${b*b} - 4 * ${a} * ${c} = ${discriminant}`;

        document.getElementById('sqrt_Deskreminant_bi_kw').innerText = `√D = ${Math.sqrt(discriminant).toFixed(2)}`;

        document.getElementById('t1').innerText = `t1 = (-b - √D) / (2 * a) = (${-b} - ${Math.sqrt(discriminant).toFixed(2)}) / (2 * ${a}) = ${x1.toFixed(2)}`

        document.getElementById('t2').innerText = `t2 = (-b + √D) / (2 * a) = (${-b} + ${Math.sqrt(discriminant).toFixed(2)}) / (2 * ${a}) = ${x2.toFixed(2)}`

        if (x1 >= 0) {
            x1_1 = Math.sqrt(x1)
            x1_2 = -Math.sqrt(x1)

            document.getElementById('x1_bi_kw').innerText = `x1 = √t1 = ${x1_1.toFixed(2)}`
            document.getElementById('x4').innerText = ``
            document.getElementById('x3').innerText = ``
            document.getElementById('x2_bi_kw').innerText = `x2 = -√t1 = ${x1_2.toFixed(2)}`
        }

        if (x2 >= 0) {
            x2_1 = Math.sqrt(x2)
            x2_2 = -Math.sqrt(x2)

            document.getElementById('x3').innerText = `x3 = √t2 = ${x2_1.toFixed(2)}`
            document.getElementById('x4').innerText = `x4 = -√t2 = ${x2_2.toFixed(2)}`

            if (x1 < 0){
                document.getElementById('x1_bi_kw').innerText = ``
                document.getElementById('x2_bi_kw').innerText = ``
            }
        }

        if(x1 < 0 && x2 < 0){
            document.getElementById('x3').innerText = `Розв\'язків немає`
            document.getElementById('x4').innerText = ``
            document.getElementById('x1_bi_kw').innerText = ``
            document.getElementById('x2_bi_kw').innerText = ``
        

        }

        

        





    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        document.getElementById('Deskreminant_bi').innerText = `D = b² - 4*a*c = ${b*b} - 4 * ${a} * ${c} = ${discriminant}`;

        document.getElementById('sqrt_Deskreminant_bi_kw').innerText = `√D = ${Math.sqrt(discriminant).toFixed(2)}`;

        document.getElementById('t1').innerText = `t = -b / (2 * a) = ${-b} / (2 * ${a}) = ${x.toFixed(2)}`
        document.getElementById('t2').innerText = ``
        if (x >= 0) {
            x1_1 = Math.sqrt(x)
            x1_2 = -Math.sqrt(x)

            document.getElementById('x1_bi_kw').innerText = `x1 = √t = ${x1_1.toFixed(2)}`
            document.getElementById('x4').innerText = ``
            document.getElementById('x3').innerText = ``
            document.getElementById('x2_bi_kw').innerText = `x2 = -√t = ${x2_1.toFixed(2)}`
        }
        else{
            document.getElementById('x1_bi_kw').innerText = `Розв\'язків немає`
            document.getElementById('x4').innerText = ``
            document.getElementById('x3').innerText = ``
            document.getElementById('x2_bi_kw').innerText = ``
        }


        



    } else {
        document.getElementById('Deskreminant_bi').innerText = `D = b² - 4*a*c = ${b*b} - 4 * ${a} * ${c} = ${discriminant}`;

        document.getElementById('sqrt_Deskreminant_bi_kw').innerText = `√D < 0`;
        
        document.getElementById('x1_bi_kw').innerText = ``
        document.getElementById('x4').innerText = ``
        document.getElementById('x3').innerText = ``
        document.getElementById('x2_bi_kw').innerText = 'Розв\'язків немає (дискримінант від\'ємний)';
        document.getElementById('t1').innerText = ``
        document.getElementById('t2').innerText = ``
    }
}