const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")
const reset = document.querySelector("#reset")
const player1 = document.querySelector("#one")
const player2 = document.querySelector("#two")
let p1Score = 0
let p2Score = 0
let winningScore = 5
let isGameOver = false
    player1.addEventListener("click", ()=>{
        p1Score += 1
        score1.textContent = p1Score
        if (p1Score === winningScore) {
            isGameOver = true
        }
    })
    player2.addEventListener("click", ()=>{
        if(isGameOver) {
            
        }
    })
// reset.addEventListener("click", ()=>{
//     let score = 0
//     score1.textContent = Score
//     score2.textContent = Score
// })

