window.onload = function stateForm() {
 let states = document.getElementById('state');
 let nameState = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

for (let i=0; i < nameState.length; i += 1) {
 let optionTAG = document.createElement('option');
 states.appendChild(optionTAG).value = nameState[i];
 states.appendChild(optionTAG).innerHTML = nameState[i];
 }
}





