import _ from 'underscore';

const EMPTY_DECK = 'YA NO QUEDAN CARTAS EN LA BARAJA';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
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

/**
 * Creates a new deck and shuffles it
 */
export const createDeck = () => {

    const newDeck = [];

    for(let cardType of cardTypes){
        for(let cardFace of cardFaces) {
            newDeck.push( cardFace + cardType )
        }
    }

    console.log(newDeck);

    deck = _.shuffle( newDeck );
}

/**
 * Removes the first card of the deck and returns it
 * @returns {String}
 */
export const pickCard = () => {
    
    console.log('DECK PICKED CARD', deck);

    if(deck.length <= 0){
        throw new Error(EMPTY_DECK);
    }
    
    return deck.pop();
}