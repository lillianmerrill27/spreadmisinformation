
let yourName = prompt("Hi! what's your name?")
let namePara = document.getElementById("Name")
namePara.textContent += yourName + " welcome to your news headlines!"
let storyOne = document.getElementById("story1")
let yourNumber = document.getElementById("your-number")
function getRandomInt(){
  let luckyNumber =  Math.floor( Math.random()*7)
  yourNumber.textContent += Math.floor (Math.random()*100)
    if (luckyNumber == 7 )
        storyOne.textContent = yourName + " Vows to Fix the Economy by Printing More Monopoly Money"
    else if (luckyNumber == 6)
        storyOne.textContent = "Trump Appoints " + yourName + " as New AI Czar Cabinet, Immediately Asks ChatGPT for Policy Advice, and is now moving toward world domination"
    else if (luckyNumber == 5)
        storyOne.textContent = "Breaking: " + yourName + " Brokers Peace Deal by Suggesting World Leaders Play 'Among Us'"
    else if (luckyNumber == 4)
        storyOne.textContent = yourName + " Accidentally Declares War on Mars During Zoom Meeting"
    else if (luckyNumber == 3)
        storyOne.textContent = "War Breaks Out After " + yourName + " Suggests Replacing United Nations Meetings with Group Chats"
    else if (luckyNumber == 2)
        storyOne.textContent = "Scandel: " + yourName + " Caught Smuggling Maple Syrup Across Canadian Border"
    else
        storyOne.textContent =  yourName + " Proposes Mandatory Naptime to Boost National Productivity"
}
getRandomInt()

