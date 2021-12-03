const rounds = document.getElementsByName("rounds")
const userInput = document.getElementsByName("userInput")
const userScore = document.getElementById("userScore")
const compScore = document.getElementById("compScore")
const qwertScore = document.getElementById("qwertScore")
const roundNr = document.getElementById("roundNr")
const whoWins = document.getElementById("roundScore")
const Paper = "paper"
const Rock = "rock"
const Scissors = "scissors"
let counter = 0
let scoreUser = 0
let scoreComp = 0
let scoreQwert = 0

let round = () => {
    for (i = 0; i < rounds.length; i++) {
        if (rounds[i].checked) {
            return rounds[i].value
        }
    }
}

let cpuChoice = () => {
    let cpu = Math.ceil(Math.random() * 3)
    switch (cpu) {
        case 1:
            return "paper"
            break;
        case 2:
            return "rock"
            break;
        case 3:
            return "scissors"
            break;
    }
}

let play = (x) => {
    let cpu = cpuChoice()
    console.log(`player ${x} vs computer ${cpu}`)
    console.log(counter + "//" + round())
    if (counter < round()) {
        console.log(`${counter} // ${round()}`)
        if (cpu == x) {
            whoWins.innerHTML = "It's a draw! This one goes to Qwert Zuiopü"
            scoreQwert++
            counter++
        } else if ((cpu == "rock" && x == "scissors") || (cpu == "paper" && x == "rock") || (cpu == "scissors" && x == "paper")) {
            whoWins.innerHTML = `${cpu} beats ${x}. Computer wins!`
            scoreComp++
            counter++
        } else if ((cpu == "scissors" && x == "rock") || (cpu == "rock" && x == "paper") || (cpu == "paper" && x == "scissors")) {
            whoWins.innerHTML = `${x} beats ${cpu}. You win!`
            scoreUser++
            counter++
        }
        userScore.innerHTML = `User: ${scoreUser}`
        compScore.innerHTML = `Computer: ${scoreComp}`
        qwertScore.innerHTML = `Qwert Zuiopü: ${scoreQwert}`
        roundNr.innerHTML = `${counter} / ${round()}`
        if (counter == round()) {
            if ((scoreUser > scoreComp) && (scoreUser > scoreQwert)) {
                whoWins.innerHTML = "You win the Game!"
            } else if ((scoreComp > scoreUser) && (scoreComp > scoreQwert)) {
                whoWins.innerHTML = "Your Computer wins the Game!"
            } else if ((scoreComp == scoreUser) && (scoreQwert < scoreUser) || (scoreComp == scoreQwert) && (scoreUser < scoreQwert) || (scoreUser == scoreQwert) && (scoreComp < scoreQwert)) {
                whoWins.innerHTML = "It's a draw!"
            } else if ((scoreQwert > scoreComp) && (scoreQwert > scoreUser)) {
                whoWins.innerHTML = "Qwert Zuiopü wins the Game!"
            }
        }
    }
}