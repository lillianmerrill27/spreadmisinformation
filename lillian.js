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
let counts = {Lillian: 0, Nikki: 0, Ray: 0, Vivi: 0 };

function submitVote(){
    let email = document.getElementById("email").value;
    let vote = document.getElementById("vote").value;

    counts[vote] = counts[vote] + 1
     

    // check if email has voted
    if(localStorage.getItem(email)){
        alert("You already used that email. Fraud better.");
    }   else{
        // Store votes
        localStorage.setItem(email, vote);
        alert("Your vote has been casted to the chambers.");
        updateResults();
        }
   // if(email == ""){
        //alert("Use an email nimwit.");}

    if(localStorage.getItem(email == "")){
        alert("Use an email nimwit")
    }
    
    
updateResults();
}   

function updateResults() {

    // count votes
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let vote = localStorage.getItem(key);
        if(counts[vote] !== undefined){
            counts[vote]++;
        }
    }

    // update display
    document.getElementById("lillian-counts").innerText = counts["Lillian"]; 
    document.getElementById("nikki-counts").innerText = counts["Nikki"]; 
    document.getElementById("ray-counts").innerText = counts["Ray"]; 
    document.getElementById("vivi-counts").innerText = counts["Vivi"]; 
}

//update results when page reloads
updateResults(); 