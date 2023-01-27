import { pickCard } from "./create-deck";
import { getCardValue } from "./card-value";

/**
 * Plays card from deck and displays
 * @param {Object} player 
 * @returns {HTMLImageElement}
 */
export const playCard = (player) => {
    const pickedCard = pickCard();

    const points = getCardValue(pickedCard);

    player.points += points;
    player.pointsDisplay.innerText = player.points;

    console.log( player )

    const imgCard = document.createElement('img');
    imgCard.classList.add('carta');
    imgCard.src = getCardImgUrl(pickedCard);

    console.log(imgCard);

    console.log(player.hand);

    return imgCard;
}

const getCardImgUrl = (card) => {
    return `assets/cartas/${card}.png`;
}