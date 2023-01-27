const init = (() => {
    /**
     * 2C = Two of Clubs
     * 2D = Two of Diamonds
     * 2H = Two of Hearts
     * 2S = Two of Spades
     */
    const BLACKJACK = 21;
    const PLAYER_VICTORY_MSG = '¡ENHORABUENA HAS GANADO!';
    const PLAYER_LOSS_MSG = '¡HAS PERDIDO QUÉ MAL!';
    const TIE_MSG = 'ES UN EMPATE';
    const EMPTY_DECK = 'YA NO QUEDAN CARTAS EN LA BARAJA';

    const cardFaces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ];
    const cardTypes = [
        'C',
        'D',
        'H',
        'S',
    ];

    let deck = [];

    const btnNewGame = document.querySelector('#btnNewGame');
    const btnPickCard = document.querySelector('#btnPickCard');
    const btnStopGame = document.querySelector('#btnStopGame');
    const pointsDisplay = document.querySelectorAll('small');
    const playerHand = document.querySelector('#player-hand');
    const computerHand = document.querySelector('#computer-hand');

    let playerPoints = 0,
        computerPoints = 0;

    const createDeck = () => {

        const newDeck = [];

        for(let cardType of cardTypes){
            for(let cardFace of cardFaces) {
                newDeck.push( cardFace + cardType )
            }
        }

        console.log(newDeck);

        return _.shuffle( newDeck );
    }

    const shuffleDeck = () => {
        return _.shuffleDeck( deck );
    }

    deck = createDeck();

    const pickCard = () => {
        
        return deck.length > 0 ? deck.pop() : EMPTY_DECK;
    }

    const getCardValue = (card) => {
        
        const cardFace = card.substring(0, card.length - 1);

        return !isNaN(cardFace) ? Number( cardFace )
            : cardFace === 'A' ? 11 : 10;
    }

    // for (let i = 0; i < 60; i++) {
    //     console.log( getCardValue( pickCard() ) );
    // }

    btnPickCard.addEventListener('click', () => {

        playerHand.append( playCard(0) );
        
        if(playerPoints > BLACKJACK) {
            computerTurn();
            finishGame();
        }

    });

    getCardImgUrl = (card) => {
        return `assets/cartas/${card}.png`;
    }

    playCard = (player) => {
        const pickedCard = pickCard();

        const points = getCardValue( pickedCard );

        if(player > 0){
            computerPoints += points;
            pointsDisplay[player].innerText = computerPoints;
        }
        else{
            playerPoints += points;
            pointsDisplay[player].innerText = playerPoints;
        }

        console.log({playerPoints, computerPoints})

        const imgCard = document.createElement('img');
        imgCard.classList.add('carta');
        imgCard.src = getCardImgUrl(pickedCard);

        console.log(imgCard);

        console.log(playerHand);

        return imgCard;
    }

    computerTurn = () => {
        // computerHand.append( playCard(1) );
        
        do{
            computerHand.append( playCard(1) );
        }
        while(computerPoints < playerPoints && playerPoints <= BLACKJACK)

        if(playerPoints > BLACKJACK) {
            btnPickCard.disabled = true;
        }
    }

    btnStopGame.addEventListener('click', () => {

        computerTurn();
        finishGame();
    });

    finishGame = () => {
        btnPickCard.disabled = true;
        btnStopGame.disabled = true;    

        setTimeout(() => {
            victoryMessage();
        }, 100);
    }

    victoryMessage = () => {

        let msgAlert;

        if(playerPoints === computerPoints){
            msgAlert = TIE_MSG;
        }
        else if(playerPoints > BLACKJACK || (playerPoints < computerPoints && !(computerPoints > BLACKJACK))){
            msgAlert = PLAYER_LOSS_MSG;
        }
        else{
            msgAlert = PLAYER_VICTORY_MSG;
        }

        alert(msgAlert);

    }

    btnNewGame.addEventListener('click', () => {
        
        deck = createDeck();
        
        btnPickCard.disabled = false;
        btnStopGame.disabled = false;

        playerPoints = 0;
        computerPoints = 0;
        
        pointsDisplay[0].innerText = playerPoints;
        pointsDisplay[1].innerText = computerPoints;
        
        playerHand.innerHTML = '';
        computerHand.innerHTML = '';

    })
    
    return {
        lola: 5
    };
    
})();