(function(){
    'use strict'
    console.log('reading JS');
    
    //variables
    const playGame = document.querySelector('#playgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const gameCanvas = document.querySelector('#canvas');
    const gameOver = document.querySelector('#game-over');
    
    // variable for sound effects
    const diceSound = new Audio('sounds2/diceroll.mp3');
    const winSound = new Audio('sounds2/gamewin.mp3');

    const gameData = {
        dice: [
        'images2/dice1.png', 
        'images2/dice2.png', 
        'images2/dice3.png', 
        'images2/dice4.png', 
        'images2/dice5.png', 
        'images2/dice6.png',
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
    playGame.addEventListener("click", function(){
        
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);


        gameControl.innerHTML = '<h2>the game has begun</h2>';
        gameControl.innerHTML += '<button id="quit">end game?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
    });

        setUpTurn();

    });

    //function for when the turn switches
    function setUpTurn(){
        game.innerHTML = `<p>roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll"> roll the dice</button>';
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

        game.innerHTML = `<p>roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">` ;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        console.log(gameData.rollSum);

        if (gameData.rollSum === 2) {
           
            game.innerHTML += '<p>oops! snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);/* ternary operator */
            setTimeout(setUpTurn, 2000);
            showCurrentScore();

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);/* ternary operator */
            game.innerHTML += `<p>sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`
            setTimeout(setUpTurn, 2000);

        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = `<button id = "rollAgain">roll again</button> or <button id = "pass">pass</button>`;

            document.getElementById('rollAgain').addEventListener('click', function() {
                setUpTurn();
            });
            document. getElementById('pass') .addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn(); 
            });

            //sounds
            if (CheckForWin()) {
                winSound.play();
            } else {
                
                diceSound.play();
            }
        }

        //function for winner of the game
        function CheckForWin() {
            if (gameData.score[gameData.index] > gameData.gameEnd) {
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points :)</h2>`;

                actionArea.innerHTML = "";
                document.getElementById("quit").innerHTML = "begin a new game";
            } else {
                showCurrentScore();
            }
        }

        //current score update 
        function showCurrentScore() {
            score.innerHTML = `<p><strong> ${gameData.players[0]}: ${gameData.score[0]} points</strong></p> <p><strong>${gameData.players[1]}: ${gameData.score[1]} points</strong></p>`;
        }
    }
})();