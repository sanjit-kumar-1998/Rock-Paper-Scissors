let userScore = 0;
let CompScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCnt = document.querySelector("#user-score");
const compScoreCnt = document.querySelector("#comp-score");


const genrateCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const ranInd = Math.floor(Math.random() * 3);

    return options[ranInd];
}

const drawGame = () => {
    msg.innerText = "Game is Draw, Play again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, comChoice) => {
    if(userWin){
        userScore++;
        userScoreCnt.innerText = userScore;
        msg.innerText = `You Won!, ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = "green"
    }else{
        CompScore++;
        compScoreCnt.innerText = CompScore;
        msg.innerText= `You lost!, ${comChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    //Genrate Computer Choice
    const comChoice = genrateCompChoice();
    if(userChoice === comChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //computer choice scissor / paper
            userWin = comChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //comp rock / scissor
            userWin = comChoice === "scissors" ? false : true;
        }else{
            //comp rock / paper
            userWin = comChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, comChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})