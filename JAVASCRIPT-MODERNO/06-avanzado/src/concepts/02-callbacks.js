import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} HtmlElement 
 */
export const callbacksComponent = (HtmlElement) => {

    console.log('CALLBACK');

    /** ID of Ant Man */
    // const id = '5d86371fd55e2e2a30fe1cc3';

    /** ID that does not exist */
    const id = '5d86371fd55e2e2a30fe1cc32';


    findHero(id, (error, hero) => {
        
        HtmlElement.innerHTML = error ? error : hero.name;

    });

}

/**
 * 
 * @param {String} id 
 * @param { (error?: String, hero: Object) => void } callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id === id);

    const error = hero ? null : `ERROR: Hero with ID: ${id} was not found`;

    callback(error, hero);
}