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




function Convert() {
    const meters = parseFloat(document.getElementById('inputMeters').value);
    const centimeters = meters * 100;
    const millimeters = meters * 1000;
    const kilometers = meters / 1000;

    document.getElementById('outputCentimeters').value = centimeters.toFixed(2);
    document.getElementById('outputMillimeters').value = millimeters.toFixed(2);
    document.getElementById('outputKilometers').value = kilometers.toFixed(6);
}








function convertLength(from, value) {
    const inputValue = parseFloat(value);

    if (from === 'Miliseconds') {
        // const Miliseconds = inputValue * 1;
        const seconds = inputValue / 1000;
        const minutes = inputValue / 60000;
        const hours = inputValue / 3600000;
        const days = inputValue / 8640000;
        const weeks = inputValue / 604800016.56;
        const months = inputValue / 2629800000;
        const years = inputValue / 31557600000;

        // document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        document.getElementById('Seconds').value = seconds.toFixed(2);
        document.getElementById('Minutes').value = minutes.toFixed(2);

        document.getElementById('Hours').value = hours.toFixed(2);
        document.getElementById('Days').value = days.toFixed(2);
        document.getElementById('Weeks').value = weeks.toFixed(2);

        document.getElementById('Months').value = months.toFixed(2);
        document.getElementById('Years').value = years.toFixed(2);



    } else if (from === 'Seconds') {
        const Miliseconds = inputValue * 1000;
        // const seconds = inputValue * 1000;
        const minutes = inputValue / 60;
        const hours = inputValue / 3600;
        const days = inputValue / 86400;
        const weeks = inputValue / 604800.02;
        const months = inputValue / 2629800;
        const years = inputValue / 31557600;

        document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        // document.getElementById('Seconds').value = Seconds.toFixed(2);
        document.getElementById('Minutes').value = minutes.toFixed(3);

        document.getElementById('Hours').value = hours.toFixed(4);
        document.getElementById('Days').value = days.toFixed(5);
        document.getElementById('Weeks').value = weeks.toFixed(5);

        document.getElementById('Months').value = months.toFixed(5);
        document.getElementById('Years').value = years.toFixed(5);


        
    } else if (from === 'Minutes') {
        const Miliseconds = inputValue * 60000;
        const seconds = inputValue * 60;
        // const minutes = inputValue * 60;
        const hours = inputValue / 60;
        const days = inputValue / 1440;
        const weeks = inputValue / 10080;
        const months = inputValue / 43830;
        const years = inputValue / 43830;

        document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        document.getElementById('Seconds').value = seconds.toFixed(3);
        // document.getElementById('Minutes').value = Minutes.toFixed(2);

        document.getElementById('Hours').value = hours.toFixed(3);
        document.getElementById('Days').value = days.toFixed(4);
        document.getElementById('Weeks').value = weeks.toFixed(4);

        document.getElementById('Months').value = Months.toFixed(5);
        document.getElementById('Years').value = years.toFixed(5);



    } else if (from === 'Hours') {
        const Miliseconds = inputValue * 3600000;
        const seconds = inputValue * 3600;
        const minutes = inputValue * 60;
        // const hours = inputValue / 60;
        const days = inputValue / 24;
        const weeks = inputValue / 168;
        const months = inputValue / 730.5;
        const years = inputValue / 8766;

        document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        document.getElementById('Seconds').value = seconds.toFixed(3);
        document.getElementById('Minutes').value = minutes.toFixed(2);

        // document.getElementById('Hours').value = Hours.toFixed(3);
        document.getElementById('Days').value = days.toFixed(4);
        document.getElementById('Weeks').value = weeks.toFixed(4);

        document.getElementById('Months').value = months.toFixed(5);
        document.getElementById('Years').value = years.toFixed(5);


    } else if (from === 'Days') {
        const Miliseconds = inputValue * 86400000;
        const seconds = inputValue * 86400;
        const minutes = inputValue * 1440;
        const hours = inputValue * 24;
        // const days = inputValue / 24;
        const weeks = inputValue / 7;
        const months = inputValue / 30.4375;
        const years = inputValue / 365.25;

        document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        document.getElementById('Seconds').value = seconds.toFixed(3);
        document.getElementById('Minutes').value = minutes.toFixed(2);

        document.getElementById('Hours').value = hours.toFixed(3);
        // document.getElementById('Days').value = Days.toFixed(4);
        document.getElementById('Weeks').value = weeks.toFixed(4);

        document.getElementById('Months').value = months.toFixed(5);
        document.getElementById('Years').value = years.toFixed(5);



    } else if (from === 'Weeks') {
        const Miliseconds = inputValue * 604800016.56;
        const seconds = inputValue * 604800.02;
        const minutes = inputValue * 10080;
        const hours = inputValue * 168;
        const days = inputValue * 7;
        // const weeks = inputValue / 7;
        const months = inputValue / 4.3482;
        const years = inputValue / 52.1786;

        document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        document.getElementById('Seconds').value = seconds.toFixed(3);
        document.getElementById('Minutes').value = minutes.toFixed(2);

        document.getElementById('Hours').value = hours.toFixed(3);
        document.getElementById('Days').value = days.toFixed(4);
        // document.getElementById('Weeks').value = Weeks.toFixed(4);

        document.getElementById('Months').value = months.toFixed(5);
        document.getElementById('Years').value = years.toFixed(5);



    } else if (from === 'Months') {
        const Miliseconds = inputValue * 2629800000;
        const seconds = inputValue * 2629800;
        const minutes = inputValue * 43830;
        const hours = inputValue * 730.5;
        const days = inputValue * 30.4375;
        const weeks = inputValue * 4.3482;
        // const months = inputValue / 4.3482;
        const years = inputValue / 12;

        document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        document.getElementById('Seconds').value = seconds.toFixed(3);
        document.getElementById('Minutes').value = minutes.toFixed(2);

        document.getElementById('Hours').value = hours.toFixed(3);
        document.getElementById('Days').value = days.toFixed(4);
        document.getElementById('Weeks').value = weeks.toFixed(4);

        // document.getElementById('Months').value = Months.toFixed(5);
        document.getElementById('Years').value = years.toFixed(5);



    } else if (from === 'Years') {
        const Miliseconds = inputValue * 31557600000;
        const seconds = inputValue * 31557600;
        const minutes = inputValue * 525960;
        const hours = inputValue * 8766;
        const days = inputValue * 365.25;
        const weeks = inputValue * 52.1786;
        const months = inputValue * 12;
        // const years = inputValue / 12;

        document.getElementById('Miliseconds').value = Miliseconds.toFixed(2);
        document.getElementById('Seconds').value = seconds.toFixed(3);
        document.getElementById('Minutes').value = minutes.toFixed(2);

        document.getElementById('Hours').value = hours.toFixed(3);
        document.getElementById('Days').value = days.toFixed(4);
        document.getElementById('Weeks').value = weeks.toFixed(4);

        document.getElementById('Months').value = months.toFixed(5);
        // document.getElementById('Years').value = Years.toFixed(5);
    }
}