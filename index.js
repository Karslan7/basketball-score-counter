let homeScoreEl = document.getElementById("home-Score")
let guestScoreEl = document.getElementById("guest-Score")

let buttons = document.querySelectorAll("button")

let homeResult = 0
let guestResult = 0

function add1Point(event){
    btn = event.target
    if(btn.classList.contains("home-Bttn")){
        
        homeResult += 1
        homeScoreEl.textContent = homeResult
    }else{
        guestResult += 1
        guestScoreEl.textContent = guestResult
    }
}

function add2Point(event){
    btn = event.target
    if(btn.classList.contains("home-Bttn")){
        
        homeResult += 2
        homeScoreEl.textContent = homeResult
    }else{
        guestResult += 2
        guestScoreEl.textContent = guestResult
    }
}

function add3Point(event){
    btn = event.target
    if(btn.classList.contains("home-Bttn")){
        
        homeResult += 3
        homeScoreEl.textContent = homeResult
    }else{
        guestResult += 3
        guestScoreEl.textContent = guestResult
    }
}

