//FIGURE OUT HOW TO ADD 3 LINKS HERE (POSSIBLY), ADDING ONCLICK EVENT LISTENER BELOW \/
let buttonClick = document.getElementById("clickmebtn1")
let buttonLog = document.getElementById("log-rolls")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
//var linkElement = document.getElementById('https://google.com');
//document.createElement('a')

count = 0

function buttonClickHandler() {
if( Math.random() <= 0.04 ){
   count = count + 5;
   documentEl.innerText = ("JACKPOT");
	console.log("JACKPOT");
	countEl.textContent = count;
//linkElement.href = https://google.com;

}
if( Math.random() <= 0.05 ){
	count = count + 2;
    console.log("epic");
	 documentEl.innerText = ("epic");
	countEl.textContent = count;
}
if( Math.random() >= 0.41 ){
	count = count + 1
    console.log("eh");			
	documentEl.innertext = ("eh");
	countEl.textContent = count;
}
}
function buttonLog() {
let countStr = count + " - ";
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
	
}
var body = document.body;
var hover_element = document.getElementById("hero_hover_animation");
hover_element.addEventListener("mouseover", function(){
	body.style.backgroundColor = '#ffd66b'
});
hover_element.addEventListener("mouseout", function(){
	body.style.backgroundColor = '#fff';
});
//const innerTextOutput = document.getElementById("innerTextOutput");
//innerTextOutput.value = source.innerText;
//const button = document.querySelector("button");
//count = 0
//button.addEventListener("click", (event) => {
	//button.textContent = `Click count: ${event.detail}`;
	//count += 1;
 // });

