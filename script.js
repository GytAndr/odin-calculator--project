//*******variable declarations */
//const a = document.getElementById('input').value;
const enterBtn = document.getElementById('Enter-button');
let operation = "";
let a = "";
let b = "";

// ******START of functions*******

//sum
const sum = function() {
    b = document.getElementById('input').value;
    return document.getElementById('resultDisplay').textContent = `${Number(a) + Number(b)}`;
}

//******Event listeners */
document.getElementById('btn+').addEventListener('click', (e) => {
    a = document.getElementById('input').value;
    operation = "+";
    document.getElementById('input').value = "";
});
document.getElementById('btn-').addEventListener('click', (e) => {
    a = document.getElementById('input').value;
    operation = "-";
    document.getElementById('input').value = "";
});
document.getElementById('btn/').addEventListener('click', (e) => {
    a = document.getElementById('input').value;
    operation = "/";
    document.getElementById('input').value = "";
});
document.getElementById('btn*').addEventListener('click', (e) => {
    a = document.getElementById('input').value;
    operation = "*";
    document.getElementById('input').value = "";
});
//enter button swich statement with diff functions
enterBtn.addEventListener('click', (e) => {
    switch (operation) {
        case "+":
            b = document.getElementById('input').value;
            document.getElementById('input').value = "";
            return document.getElementById('resultDisplay').textContent = `${Number(a) + Number(b)}`;
            break;
        case "-":
            b = document.getElementById('input').value;
            document.getElementById('input').value = "";
            return document.getElementById('resultDisplay').textContent = `${Number(a) - Number(b)}`;
            break;
        case "*":
            b = document.getElementById('input').value;
            document.getElementById('input').value = "";
            return document.getElementById('resultDisplay').textContent = `${Number(a) * Number(b)}`;
            break;
        case "/":
            b = document.getElementById('input').value;
            document.getElementById('input').value = "";
            return document.getElementById('resultDisplay').textContent = `${Number(a) / Number(b)}`;
            break;
        default:
            break;
    }
});


document.getElementById('btn5').addEventListener('click', (e) => {
    document.getElementById('input').value += "5";
});
document.getElementById('btn4').addEventListener('click', (e) => {
    document.getElementById('input').value += "4";
});
document.getElementById('btn3').addEventListener('click', (e) => {
    document.getElementById('input').value += "3";
});
document.getElementById('btn2').addEventListener('click', (e) => {
    document.getElementById('input').value += "2";
});
document.getElementById('btn1').addEventListener('click', (e) => {
    document.getElementById('input').value += "1";
});
document.getElementById('btn6').addEventListener('click', (e) => {
    document.getElementById('input').value += "6";
});
document.getElementById('btn7').addEventListener('click', (e) => {
    document.getElementById('input').value += "7";
});
document.getElementById('btn8').addEventListener('click', (e) => {
    document.getElementById('input').value += "8";
});
document.getElementById('btn9').addEventListener('click', (e) => {
    document.getElementById('input').value += "9";
});
document.getElementById('btn0').addEventListener('click', (e) => {
    document.getElementById('input').value += "0";
});
