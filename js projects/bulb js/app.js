const lightBtn =document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');
const btnOn = document.getElementById('btnOff');
const btnOff = document.getElementById('btnOff');


function onHandler() {
    lightBtn.style.backgroundColor = "white";
    lightBtn.style.display = "none";
    darkBtn.style.display = 'block'
    btnOff.src = './Assets/lightOn.jpg'
}
function offHandler() {
    darkBtn.style.backgroundColor = 'White';
    lightBtn.style.display = 'block';
    darkBtn.style.display = 'none';
    btnOff.src = './Assets/lightOff.jpg'
}