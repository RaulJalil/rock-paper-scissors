let options = ['rock', 'paper', 'scissors'];

function playGame(player){
    let option_num = getRandomNum(0, 2);
    let computer = options[option_num];
    let result = getResult(player, computer);
    updateScores(result);
    printResult(player, computer, result);
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getResult(player, computer) {
    if (player === computer) {
        return 'tie';
    }

    else if (player === 'rock'){
        if (computer === 'scissors'){
            return 'player won';
        }
        else {
            return 'computer won';
        }
    }
    else if (player === 'paper'){
        if (computer === 'rock'){
            return 'player won';
        }
        else {
            return 'computer won';
        }
    }
    else if (player === 'scissors'){
        if (computer === 'paper'){
            return 'player won';
        }
        else {
            return 'computer won';
        }
    }
}


function updateScores(result) {
    let scoreboard = document.getElementById('scoreboard');
    let score = scoreboard.innerHTML;
    score = score.replace(/\s/g, '').split(':')
    let playerScore = score[0];
    let computerScore = score[1];
    if (result === 'player won'){
        playerScore++;
    }
    else if (result === 'computer won'){
        computerScore++;
    }
    let newScore = `${playerScore} : ${computerScore}`;
    scoreboard.innerHTML = newScore;
}

function printResult(player, computer, result){
    let resultboard = document.getElementById('resultboard');
    let resultText = `Player: ${player} Computer: ${computer} Result: ${result}`;
    resultboard.innerHTML = resultText;
}




