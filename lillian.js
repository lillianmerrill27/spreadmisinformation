//lillian js code here
// goal = voting system for the Shaming


// Voting clicker system - make number go up
    let count = {}

    function votes(voteElString) {
        let voteEl = document.getElementById(voteElString + '-vote-el') 
        count[voteElString] = (count[voteElString] ?? 0) + 1
        voteEl.innerText = count[voteElString]
}