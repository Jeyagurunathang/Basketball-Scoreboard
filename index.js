let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let hCount = 0
let gCount = 0
homeScoreEl.textContent = hCount
guestScoreEl.textContent = gCount

function hAdd1() {
    hCount += 1
    homeScoreEl.textContent = hCount
}

function hAdd2() {
    hCount += 2
    homeScoreEl.textContent = hCount
}

function hAdd3() {
    hCount += 3
    homeScoreEl.textContent = hCount
}

function gAdd1() {
    gCount += 1
    guestScoreEl.textContent = gCount
}

function gAdd2() {
    gCount += 2
    guestScoreEl.textContent = gCount
}

function gAdd3() {
    gCount += 3
    guestScoreEl.textContent = gCount
}

function newGame() {
    hCount = 0
    gCount = 0
    homeScoreEl.textContent = hCount
    guestScoreEl.textContent = gCount
}