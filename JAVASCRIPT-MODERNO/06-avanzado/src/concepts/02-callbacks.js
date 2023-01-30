import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} HtmlElement 
 */
export const callbacksComponent = (HtmlElement) => {

    console.log('CALLBACK');

    const id = '5d86371fd55e2e2a30fe1cc3';

    findHero(id, (hero) => {
        HtmlElement.innerHTML = hero.name;
    });

}

/**
 * 
 * @param {String} id 
 * @param { (hero: Object) => void } callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id === id);

    callback(hero);
}