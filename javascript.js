console.log("Hello World")

function getComputerChoice(){
    choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*choices.length)];

}

function getHumanChoice(){
    let humanChoice = prompt('Pick rock, paper or scissors');
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice) {
    if (humanChoice === computerChoice){
        return `Draw! You both chose ${humanChoice}`;
    } else if ((humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'rock' && computerChoice === 'scissors')){
            humanScore++;
            return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;

    }
        
}




function playGame(){
    for (let i = 1; i<=5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Round ${i}`);
        console.log(playRound(humanSelection,computerSelection));
        console.log(`You: ${humanScore}   :     Computer: ${computerScore}`);
        console.log('-----------------------');

    }
}

// playGame();