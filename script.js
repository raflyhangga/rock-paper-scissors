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
            alert("Enemy Choose: "+ enemyChoice +"\nYou Draw!");
            return "DRAW"
        }
        else if (enemyChoice == "PAPER") {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Lose!");
            return "LOSE";
        }
        else {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Win!");
            return "WIN";
        }
    }
    else if (userChoice == "PAPER") {
        if (enemyChoice == "ROCK") {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Win!");
            return "WIN"
        }
        else if (enemyChoice == "PAPER") {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Draw!");
            return "DRAW";
        }
        else {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Lose!");
            return "LOSE";
        }
    }
    else if (userChoice == "SCISSORS") {
        if (enemyChoice == "ROCK") {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Lose!");
            return "LOSE"
        }
        else if (enemyChoice == "PAPER") {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Win!");
            return "WIN";
        }
        else {
            alert("Enemy Choose: "+ enemyChoice +"\nYou Draw!");
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


while (totalScore < 3) {
    if ((userScore == 2 && botScore == 0) ||(userScore == 0 && botScore == 2)) {
            break;
        }

    let userChoice = prompt("Insert your choice! (Rock, Paper, or Scissors?)\nCurrent Score:\nYou: " + userScore + "     Computer: "+ botScore).toUpperCase();

    while (checkValidity(userChoice) == false) {
        userChoice = prompt("WRONG INPUT!!\nInsert your choice! (Rock, Paper, or Scissors?)\nCurrent Score:\nYou: " + userScore + "     Computer: "+ botScore).toUpperCase();
    }


    let enemyChoice = getComputerChoice();
    let result = game(userChoice,enemyChoice);

    if (result == "WIN") {
        ++userScore;
    }
    else if (result == "LOSE") {
        ++botScore;
    }
    totalScore = userScore + botScore;
}

if (userScore > botScore) {
    alert("You just won the game!")
}
else {
    alert("You lose the game. Thank you for playing!")
}