//lillian js code here
// goal = voting system for the Shaming

let votesEl1 = document.getElementById("votes-el1")

console.log(votesEl1)

let votes = 0

function votes() {
    votesEl1 = votesEl1 + 1
    votesEl1.textContent = votes
}