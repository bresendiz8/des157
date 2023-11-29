(function(){
    'use strict'
    console.log('reading JS');
    
    //variables
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');


    const gameData = {
        dice: [
        'images/dice1.png', 
        'images/dice2.png', 
        'images/dice3.png', 
        'images/dice4.png', 
        'images/dice5.png', 
        'images/dice6.png',
    ],
        players: ['friend 1', 'friend 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };    

    //function for game to start
    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);


        gameControl.innerHTML = '<h2>The Game Has Begun</h2>';
        gameControl.innerHTML += '<button id="quit">End Game?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
    });

        setUpTurn();

    });

    //function for when the turn switches
    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll"> Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });

    }
    //function to throw dice
    function throwDice(){
        actionArea.innerHTML = '';

        //randomized dice roll 
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">` ;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        console.log(gameData.rollSum);

        if (gameData.rollSum === 2) {
           
            game.innerHTML += '<p>oops! snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       /* ternary operator */
            setTimeout(setUpTurn, 2000);
            showCurrentScore();

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);       /* ternary operator */
            game.innerHTML += `<p>sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`
            setTimeout(setUpTurn, 2000);

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = `<button id = "rollAgain">Roll Again</button> or <button id = "pass">Pass</button>`;

            document.getElementById('rollAgain').addEventListener('click', function() {
                setUpTurn();
            });
            document. getElementById('pass') .addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn(); 
            });

            CheckForWin();
        }
        //function for winner of the game
        function CheckForWin() {
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points :)</h2>`;

                actionArea.innerHTML = "";
                document.getElementById("quit").innerHTML = "start a new game";
            } else {
                showCurrentScore();
            }
        }
        //current score update 
        function showCurrentScore() {
            score.innerHTML = `<p><strong> ${gameData.players[0]}: ${gameData.score[0]} points</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]} points</strong></p>`;
        }
    }
})();