/**
 * Returns the numeric value of a card based on its face
 * @param {String} card 
 * @returns {Number}
 */
export const getCardValue = (card) => {
      
    const cardFace = card.substring(0, card.length - 1);

    return !isNaN(cardFace) ? Number( cardFace )
        : cardFace === 'A' ? 11 : 10;
}