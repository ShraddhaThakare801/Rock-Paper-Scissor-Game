let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreDisplay = document.querySelector("#user-score");
let compScoreDisplay = document.querySelector("#comp-score");

let userChoice;
let userWin;

let userScore = 0;
let compScore = 0;

const generateCompChoice  = () => {
    let options = ["rock","paper","scissor"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return (options[randomIndex]);
};

const gameDraw = () => {
    msg.innerText =`Game was a draw..Play Again!`;
    msg.style.backgroundColor = "#0C1821";
};

choices.forEach(choice => {
        choice.addEventListener("click",() => {
        userChoice = choice.getAttribute("id");
        gamePlay();
    })
});

const gamePlay = () => {
    let compChoice = generateCompChoice();
    if(userChoice === compChoice){
    gameDraw();
    }
    else{
        if(userChoice === "rock"){
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
    
        else if(userChoice === "paper"){
            if(compChoice === "rock"){
                userWin = true
            }
            else{
                userWin = false
            }
        }
    
        else{
            if(compChoice === "paper"){
                userWin = true;
            }
            else{
                userWin = false;
            }
        }
    
        if(userWin){
            userScore++;
            userScoreDisplay.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            compScore++;
            compScoreDisplay.innerText = compScore;
            msg.innerText = `You lose..${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }
}











   