window.onload = function stateForm() {
 let states = document.getElementById('state');
 let nameState = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

for (let i=0; i < nameState.length; i += 1) {
 let optionTAG = document.createElement('option');
 states.appendChild(optionTAG).value = nameState[i];
 states.appendChild(optionTAG).innerHTML = nameState[i];
 }
}

let button = document.querySelector("#button")

function validadeDate () {

let date = document.getElementById("inputData").value;

 let day = parseInt(date.substring(0,3)) || '';
let mounth = parseInt(date.substring(3,5)) || '';
let year = parseInt(date.substring(6,10)) || '';

if (typeof(day) !== 'number' || typeof(mounth) !== 'number' || typeof(year) !== 'number') {
    
    alert ("O campo deve ser preenchido com números")
}

if (day < 0 || day > 31){
    alert ("Dia deve ser maior qu 0 e menor que 31")
}

if (mounth < 0 || mounth >12){
    alert ("Mês deve ser maior que 0 e menor que 12")
}
if (year < 0) {
    alert ("Ano deve ser maior que 0")
}
}

button.addEventListener('click', validadeDate) ;





