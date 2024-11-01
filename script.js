//your JS code here. If required.
const valueP=document.getElementById('countContainer')

const increment=document.getElementById('incrementBtn')

increment.addEventListener('click',()=>{
	let x = parseInt(valueP.innerText);
    x = x + 1;
    valueP.innerText = x;
})