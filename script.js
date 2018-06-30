//get random option from an array of options
const computerPlay = function(){
   const options = ["Rock", "Paper", "Scissors"];
   let option = options[Math.floor(Math.random()*options.length)];
    return option;
}
function playRound(playerSelection, computerSelection){
    //sanitize user input
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    switch (playerSelection) {
        case "ROCK":
                //write if statements inside
                if (computerSelection==="ROCK") {
                    return "Please start again";                
                }else if(computerSelection==="SCISSORS"){
                    return "Congrats! You have won!";
                }else{
                    return "Sorry, you have lost this time!";
                }
            break;
        case "SCISSORS":
                //write if statements inside
                if (computerSelection==="SCISSORS") {
                    return "Please start again";                
                }else if(computerSelection==="ROCK"){
                    return "Sorry, you have lost this time";
                }else{
                    return "Congrats! You have won this time!";
                }
            break;
        case "PAPER":
                //write if statements inside
                if (computerSelection==="PAPER") {
                    return "Please start again";                
                }else if(computerSelection==="SCISSORS"){
                    return "Sorry, you have lost this time";
                }else{
                    return "Congrats! You have won this time!";
                }
            break;
    }

    return "We dont know the winner yet";

//   return "You lose! Paper beats rock!";
}

//play the game for 5 rounds
for (let i = 0; i < 5; i++) {
    var playerSelection = prompt("Please choose from: paper, rock or scissors");
    var computerSelection = computerPlay();
    var resultOfGame = playRound(playerSelection, computerSelection);
    console.log("Game " + i);
    console.log("The player has selected: " + playerSelection);
    console.log("The computer has selected: " + computerSelection);
    console.log(resultOfGame);
}
//TODO keep score and display winner/loser at the end of 5-round game