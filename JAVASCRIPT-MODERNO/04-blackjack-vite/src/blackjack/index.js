import { createDeck, computerTurn, playCard, victoryMessage } from './usecases';

const init = (() => {

    /* Initializes deck */
    createDeck();

    const BLACKJACK = 21;

    /* BUTTON HTML ELEMENTS */
    const btnNewGame = document.querySelector('#btnNewGame');
    const btnPickCard = document.querySelector('#btnPickCard');
    const btnStopGame = document.querySelector('#btnStopGame');

    const pointsDisplay = document.querySelectorAll('small');

    const player = {
        pointsDisplay: pointsDisplay[0],
        points: 0,
        hand: document.querySelector('#player-hand'),
    }
    const computer = {
        pointsDisplay: pointsDisplay[1],
        points: 0,
        hand: document.querySelector('#computer-hand'),
    }


    btnPickCard.addEventListener('click', () => {

        player.hand.append(playCard(player));

        if (player.points > BLACKJACK) {
            endPlayerTurn();
        }

    });

    btnStopGame.addEventListener('click', () => {
        endPlayerTurn();
    });

    const endPlayerTurn = () => {
        computerTurn(computer, player, BLACKJACK);
        finishGame();
    }

    const finishGame = () => {
        btnPickCard.disabled = true;
        btnStopGame.disabled = true;

        setTimeout(() => {
            victoryMessage(player, computer, BLACKJACK);
        }, 100);
    }

    btnNewGame.addEventListener('click', () => {

        createDeck();

        btnPickCard.disabled = false;
        btnStopGame.disabled = false;

        player.points = 0;
        computer.points = 0;

        player.pointsDisplay.innerText = player.points;
        computer.pointsDisplay.innerText = computer.points;

        player.hand.innerHTML = '';
        computer.hand.innerHTML = '';

    })

})();
