//*******variable declarations */
const a = document.getElementById('input').value;

// ******START of functions*******

//sum
const sum = function(b) {
    b = window.prompt();
return console.log(Number(a) + Number(b));
}

//******Event listeners */
document.getElementById('btn+').addEventListener('click', sum);
document.getElementById('btn5').addEventListener('click', (e) => {
    document.getElementById('input').value ="5";
});
