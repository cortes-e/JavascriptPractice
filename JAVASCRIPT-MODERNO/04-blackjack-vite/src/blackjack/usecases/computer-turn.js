import { playCard } from "./play-card";

// export const computerHand = document.querySelector('#computer-hand');

/**
 * Computer AI that picks cards trying to beat the player or at least force a tie
 * @param {Object} computer
 * @param {Object} player
 * @param {Number} blackjack
 */
export const computerTurn = (computer, player, blackjack) => {
    // computerHand.append( playCard(1) );
    console.log('COMPUTER', computer)
    do{
        computer.hand.append( playCard(computer) );
    }
    while(computer.points < player.points && player.points <= blackjack)

    // if(playerPoints > BLACKJACK) {
    //     btnPickCard.disabled = true;
    // }
}