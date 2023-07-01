function getComputerChoice () {
    let randNumber = Math.floor(Math.random()*10) + 1;
    if (randNumber <= 4) {
        return "ROCK";
    }
    else if (randNumber > 4 && randNumber <= 6) {
        return "PAPER";
    }
    else {
        return "SCISSORS"
    }
}

function game(userChoice,enemyChoice) {
    if (userChoice == "ROCK") {
        if (enemyChoice == "ROCK") {
            return "DRAW"
        }
        else if (enemyChoice == "PAPER") {
            return "LOSE";
        }
        else {
            return "WIN";
        }
    }
    else if (userChoice == "PAPER") {
        if (enemyChoice == "ROCK") {
            return "WIN"
        }
        else if (enemyChoice == "PAPER") {
            return "DRAW";
        }
        else {
            return "LOSE";
        }
    }
    else if (userChoice == "SCISSORS") {
        if (enemyChoice == "ROCK") {
            return "LOSE"
        }
        else if (enemyChoice == "PAPER") {
            return "WIN";
        }
        else {
            return "DRAW";
        }
    }
};

function checkValidity(userChoice) {
    if (userChoice == "ROCK" || userChoice == "PAPER" || userChoice == "SCISSORS" ) {
        return true;
    }
    else {
        return false;
    }
}



let userScore = 0;
let botScore = 0;
let totalScore = 0;

window.addEventListener('click', (e) => {
    const dispScore = document.querySelector('.platform .score h3');
    const dispResult = document.querySelector('.platform .score h4')
    const dispUser = document.querySelector('.platform .user-tiles span i')
    const dispComputer = document.querySelector('.platform .enemy-tiles span i')
    const userChoice = e.target.id;
    const compChoice = getComputerChoice();
    if (userChoice === '') return;
    
    let result = game(userChoice,compChoice);
    
    
    
    if (result === "WIN") {
        ++userScore;
    } else if (result === "LOSE") {
        ++botScore;
    }
    
    totalScore = userScore + botScore;
    if ((userScore == 2 && botScore == 0) ||(userScore == 0 && botScore == 2)) {
        if (userScore > botScore) {
            setTimeout(()=> {
                dispResult.textContent = `You Won!`;
            },800 )
            userScore = 0;
            botScore = 0;
            setTimeout(()=> {
                dispResult.textContent = ``;
            }, 2000 )
        } else {
            setTimeout(()=> {
                dispResult.textContent = `You Lose!`;
            },800 )
            userScore = 0;
            botScore = 0;
            setTimeout(()=> {dispResult.textContent = ``;}, 2000 )
        }
    }
    else if (totalScore === 3) {
        if (userScore > botScore) {
            setTimeout(()=> {
                dispResult.textContent = `You Won!`;
            },800 )
            userScore = 0;
            botScore = 0;
            setTimeout(()=> {dispResult.textContent = ``;}, 2000 )
        } else {
            setTimeout(()=> {
                dispResult.textContent = `You Lose!`;
            },800 )
            userScore = 0;
            botScore = 0;
            setTimeout(()=> {dispResult.textContent = ``;}, 2000 )
        }
    }
    
    dispUser.textContent = '';
    setTimeout(()=>{
        dispUser.textContent = userChoice;
    },200)
    dispComputer.textContent = "";
    setTimeout(()=> {
        dispComputer.textContent = compChoice;
        dispScore.textContent = `${userScore} - ${botScore}`;
    },500)
})

