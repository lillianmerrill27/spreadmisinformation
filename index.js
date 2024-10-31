//FIGURE OUT HOW TO ADD 3 LINKS HERE, ADDING ONCLICK EVENT LISTENER BELOW \/
let buttonClick = document.getElementById("clickmebtn1")
let buttonLog = document.getElementById("log-rolls")
//var linkElement = document.getElementById('https://google.com');
//document.createElement('a')

i = 0

function buttonClick() {
if( Math.random() <= 0.04 ){
   i = i + 5;
   console.log("jackpot");
	 documentEl.innerText("jackpot");
	buttonClick.innerHtml = "jackpot";
//linkElement.href = https://google.com;

}
if( Math.random() <= 0.05 ){
	i = i + 2;
    console.log("epic");
	 documentEl.innerText = ("epic");
	buttonClick.innerHtml = 'epic';
}
if( Math.random() >= 0.41 ){
	i = i + 1
    console.log("eh");			
	documentEl.innertext = ("eh");
	buttonClick.innerHtml = 'eh';
}
}
function buttonLog() {
	buttonLogValue += buttonClick;
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


