//ray js code here

let buttonClick = document.getElementById("clickmebtn1")
let buttonLog = document.getElementById("log-rolls")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
//var linkElement = document.getElementById('https://google.com');
//document.createElement('a')








let count = 0




function buttonClickHandler() {
    let selection = Math.random()
     if(selection <= 0.00001){
     count = count + 250000000;
     } 
     else if(selection <= 0.0001){
     count = count + 2500000;
     }
     else if(selection <= 0.001){
     count = count + 250000;
     }
     else if(selection <= 0.003){
     count = count + 50000;
     }
     else if(selection <= 0.004) {
        count = count + 500;
    }
   
    
    else if (selection <= 0.04) {
        count = count + 25;
        //console.log("JACKPOT");
        //documentEl.innerText("JACKPOT");
       // countEl.textContent = count;
        //linkElement.href = https://google.com;
    }
    
    else if (selection <= 0.09) {
        count = count + 5;
        //console.log("epic");
        //documentEl.innerText = ("epic");
        //countEl.textContent = count;
    }
    else if (selection <= 0.4) {
        count = count + 3;
    }
    else {
        count = count + 1
        //console.log("eh");
        //documentEl.innertext = ("eh");
        //countEl.textContent = count;
    }

countEl.textContent = count
}


function logAction() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    //countEl.textContent = 0;
    count = 0;
    countEl.textContent = 0
}












var body = document.body;
/* var hover_element = document.getElementById("hero_hover_animation");
hover_element.addEventListener("mouseover", function () {
    body.style.backgroundColor = '#ffd66b'
});
hover_element.addEventListener("mouseout", function () {
    body.style.backgroundColor = '#fff';
}); */
//const innerTextOutput = document.getElementById("innerTextOutput");
//innerTextOutput.value = source.innerText;
//const button = document.querySelector("button");
//count = 0
//button.addEventListener("click", (event) => {
//button.textContent = `Click count: ${event.detail}`;
//count += 1;
// });
let initialNumber = 100;
let addNumber = 100
let theNumber = Number(prompt("Pick A Number Of Viruses"));
window.confirm("Your number is the square root of " + (theNumber + addNumber) * initialNumber);
alert("have some misinformation fun");