//lillian js code here
// goal = voting system for the Shaming


// Voting clicker system - make number go up
//    let count = {}

//    function votes(voteElString) {
//        let voteEl = document.getElementById(voteElString + '-vote-el') 
//        count[voteElString] = (count[voteElString] ?? 0) + 1
//        voteEl.innerText = count[voteElString]
//}

// another code try :p
//let counts = {Lillian: 0, Nikki: 0, Ray: 0, Vivi: 0 };

//function submitVote(){
//    let email = document.getElementById("email").value.trim();
//    let vote = document.getElementById("vote").value;

//    counts[vote] = counts[vote] + 1
     

    // check if email has voted
//    if(localStorage.getItem(email)){
//        alert("You already used that email. Fraud better.");
//   }   else{
        // Store votes
//        localStorage.setItem(email, vote);
//        alert("Your vote has been casted to the chambers.");
//        updateResults();
//        }
   // check if email is empty 

//    if(localStorage.getItem(email === "")){
//        alert("Use an email nimwit")
//    }
    
    
//updateResults();
//}   

//function updateResults() {

    // count votes
//    for (let i = 0; i < localStorage.length; i++){
//        let key = localStorage.key(i);
//        let vote = localStorage.getItem(key);
//        if(counts[vote] !== undefined){
//            counts[vote]++;
//        }
//    }

    // update display
//    document.getElementById("lillian-counts").innerText = counts["lillian-vote-el"]; 
//    document.getElementById("nikki-counts").innerText = counts["nikki-vote-el"]; 
//    document.getElementById("ray-counts").innerText = counts["ray-vote-el"]; 
//    document.getElementById("vivi-counts").innerText = counts["vivi-vote-el"]; 
//}

//update results when page reloads
//updateResults(); 

let counts = { Lillian: 0, Nikki: 0, Ray: 0, Vivi: 0 };

function submitVote() {
    let email = document.getElementById("email").value.trim();
    let vote = document.getElementById("vote").value;

    // Match vote value to counts keys
    let voteKey = mapVoteToKey(vote);

    if (!voteKey) {
        alert("Please select a valid candidate to vote for.");
        return;
    }

    // Check for empty email
    if (email === "") {
        alert("Use an email, nimwit.");
        return;
    }

    // Check if email has already voted
    if (localStorage.getItem(email)) {
        alert("You already used that email. Fraud better.");
        return;
    }

    // Record vote and update localStorage
    counts[voteKey]++;
    localStorage.setItem(email, voteKey);

    alert("Your vote has been casted to the chambers.");
    updateResults();
}

function updateResults() {
    // Reset counts
    counts = { Lillian: 0, Nikki: 0, Ray: 0, Vivi: 0 };

    // Recalculate votes from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let vote = localStorage.getItem(key);
        if (counts[vote] !== undefined) {
            counts[vote]++;
        }
    }
    
    // Update display
    document.getElementById("lillian-counts").innerText = counts["Lillian"];
    document.getElementById("nikki-counts").innerText = counts["Nikki"];
    document.getElementById("ray-counts").innerText = counts["Ray"];
    document.getElementById("vivi-counts").innerText = counts["Vivi"];

    let max_key = ""
    let max = -1

        for (let key in counts){
        if (counts[key] > max){
           max = counts[key]
           max_key = key
        console.log(max_key + " " + max)
        document.getElementById("winner-img").src = "images/" + max_key + ".jpg"
        console.log(Math.max(...Object.values(counts)));   }
        }

    
}

// Helper function to map <option> values to counts keys
function mapVoteToKey(value) {
    switch (value) {
        case "lillian-vote-el": return "Lillian";
        case "nikki-vote-el": return "Nikki";
        case "ray-vote-el": return "Ray";
        case "vivi-vote-el": return "Vivi";
        default: return null;
    }
}

console.log(max_key + " " + max)
document.getElementById("winner-img").src = "images/" + max_key + ".jpg"
console.log(Math.max(...Object.values(counts)));

// if lillian bigger


// Update results on page load
updateResults();