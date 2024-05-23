document.querySelector('.add-One-home').addEventListener('click', addOneMoreHome)
document.querySelector('.add-Two-home').addEventListener('click', addTwoMoreHome)
document.querySelector('.add-Three-home').addEventListener('click', addThreeMoreHome)

document.querySelector('.js-new-game-btn').addEventListener('click', resetScore)

document.querySelector('.add-One-visitor').addEventListener('click', addOneMoreVisitor)
document.querySelector('.add-Two-visitor').addEventListener('click', addTwoMoreVisitor)
document.querySelector('.add-Three-visitor').addEventListener('click', addThreeMoreVisitor)

let scoreHome = document.querySelector('.score-home');
let scoreVisitor = document.querySelector('.score-visitor');
// let totalScore = document.querySelector('.js-new-game-btn');


let homeScore = Number();
let visitorScore = Number();

function resetScore(){
    homeScore = 0;
    visitorScore = 0;
    scoreHome.innerText = homeScore
    scoreVisitor.innerText = visitorScore

}

function addOneMoreHome(){
    homeScore += 1
    scoreHome.innerText = homeScore 
}

function addTwoMoreHome(){
    homeScore += 2
    scoreHome.innerText = homeScore
}

function addThreeMoreHome(){
    homeScore += 3
    scoreHome.innerText = homeScore
}


function addOneMoreVisitor(){
    visitorScore += 1
    scoreVisitor.innerText = visitorScore
}

function addTwoMoreVisitor(){
    visitorScore += 2
    scoreVisitor.innerText = visitorScore
}

function addThreeMoreVisitor(){
    visitorScore += 3
    scoreVisitor.innerText = visitorScore
}