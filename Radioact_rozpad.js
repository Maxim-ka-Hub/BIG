function searchElementΛ() {
    let result = document.getElementById('result_first');
    let T = document.getElementById('first_T').value;

    result.innerHTML = `Λ = 0.69 / ${T} = ${0.69 / (T)}`;
    result_lambda = 0.69 / (T);
}
function searchElementT() {
    let result = document.getElementById('result_first');
    let L = document.getElementById('first_L').value;

    result.innerHTML = `T = 0.69 / ${L} = ${0.69 / (L)}`;
    result_lambda = 0.69 / (L);
}

// ||||||||||||||||||||||||||||||||||||||||||||

function searchElementA() {
    let result = document.getElementById('result_sec');
    let N = parseFloat(document.getElementById('first_N_0').value);
    let Λ = parseFloat(document.getElementById('first_lambda').value);
    result.innerHTML = `A = Λ * N = ${Λ * N}`;
}


function searchElementN_0() {
    let result = document.getElementById('result_sec');
    let A = parseFloat(document.getElementById('first_A').value);
    let Λ = parseFloat(document.getElementById('first_lambda').value);
    result.innerHTML = `N = A / Λ = ${A / Λ}`;
}

function searchElementlambda() {
    let result = document.getElementById('result_sec');
    let A = parseFloat(document.getElementById('first_A').value);
    let N = parseFloat(document.getElementById('first_N_0').value);
    result.innerHTML = `Λ = A / N = ${A / N}`;
}

//  ||||||||||||||||||||||||||||||||||||||||||||||


function searchElementN_1() {
    let result = document.getElementById('result_third');
    let No = parseFloat(document.getElementById('third_No').value);
    let T = parseFloat(document.getElementById('third_T').value);
    let t = parseFloat(document.getElementById('third_t').value);

    result.innerHTML = `N = No / 2^T/t = ${No / (2**(T/t))}`
}


function searchElementNo_1() {
    let result = document.getElementById('result_third');
    let N = parseFloat(document.getElementById('third_N').value);
    let T = parseFloat(document.getElementById('third_T').value);
    let t = parseFloat(document.getElementById('third_t').value);

    result.innerHTML = `No = N * 2^T/t = ${N * (2**(T/t))}`
}


function searchElementT_1() {
    let result = document.getElementById('result_third');
    let N = parseFloat(document.getElementById('third_N').value);
    let No = parseFloat(document.getElementById('third_No').value);
    let t = parseFloat(document.getElementById('third_t').value);

    result.innerHTML = `T = t * log2(No/N) = ${t * (Math.log2(No/N))}`
}

function searchElement_1() {
    let result = document.getElementById('result_third');
    let N = parseFloat(document.getElementById('third_N').value);
    let No = parseFloat(document.getElementById('third_No').value);
    let T = parseFloat(document.getElementById('third_T').value);

    result.innerHTML = `t = T / log2(No/N) = ${T / (Math.log2(No/N))}`
}