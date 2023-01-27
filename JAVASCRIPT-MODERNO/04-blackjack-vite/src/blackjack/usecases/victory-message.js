const PLAYER_VICTORY_MSG = '¡ENHORABUENA HAS GANADO!';
const PLAYER_LOSS_MSG = '¡HAS PERDIDO QUÉ MAL!';
const TIE_MSG = 'ES UN EMPATE';

/**
 * Displays the corresponding victory message based on players final points
 * @param {Object} player 
 * @param {Object} computer 
 * @param {Number} blackjack 
 */
export const victoryMessage = (player, computer, blackjack) => {

    let msgAlert;

    if (player.points === computer.points) {
        msgAlert = TIE_MSG;
    }
    else if (player.points > blackjack || (player.points < computer.points && !(computer.points > blackjack))) {
        msgAlert = PLAYER_LOSS_MSG;
    }
    else {
        msgAlert = PLAYER_VICTORY_MSG;
    }

    alert(msgAlert);

}