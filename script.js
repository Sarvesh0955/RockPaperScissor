let getComputerChoice = () => {
    let x = Math.floor(1 + (Math.random() * 3) );
    
    if(x == 1)
        return "Rock";
    else if(x == 2)
        return "Paper";
    else
        return "Scissor";
}

let oneRound = (playerSelection,computerSelection = getComputerChoice()) => {

    playerSelection = playerSelection.at(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // console.log(playerSelection);
    if(playerSelection == "Rock")
    {
        if(computerSelection == "Paper")
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        else if(computerSelection == "Rock")
            return `Draw`;
        else
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection == "Paper")
    {
        if(computerSelection == "Scissor")
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        else if(computerSelection == "Paper")
            return `Draw`;
        else
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else
    {
        if(computerSelection == "Rock")
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        else if(computerSelection == "Scissor")
            return `Draw`;
        else
            return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

let playGame = () => {

    let playerScore = 0;
    let computerScore = 0;

    for(let i=1;i<=5;i++)
    {
        console.log("Round " + i + " : ");
        let result = oneRound(prompt("Enter rock,paper,scissor: ")) ;
        console.log(result);
        if(result.slice(4,7) == "win")
            playerScore++;
        else if(result.slice(4,7) == "los")
            computerScore++;
    }

    if(computerScore < playerScore)
        console.log("Player Wins");
    else
        console.log("Computer Wins");
}