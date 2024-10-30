
//FIGURE OUT HOW TO ADD 3 LINKS HERE, ADDING ONCLICK EVENT LISTENER BELOW \/
let buttonClick = document.getElementById("clickmebtn1")
//var linkElement = document.getElementById('https://google.com');
//document.createElement('a')

i = 0

function buttonClick() {
if( Math.random() <= 0.04 ){
   i = i + 5
   console.log("jackpot")
//linkElement.href = https://google.com;

}
if( Math.random() <= 0.05 ){
	i = i + 2
    console.log("epic")
}
if( Math.random() >= 0.41 ){
	i = i + 1
    console.log("eh")
}
}

