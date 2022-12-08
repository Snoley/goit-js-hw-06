

let counterValue = 0;

const counter = document.querySelectorAll('button')
const increment = counter[0];
const decrement = counter[1];

increment.addEventListener('click', incrementClick);

function incrementClick(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
}

decrement.addEventListener('click', decrementClick);

function decrementClick(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
}