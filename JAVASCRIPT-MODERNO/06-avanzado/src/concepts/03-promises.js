import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} HtmlElement 
 */
export const promiseComponent = (HtmlElement) => {

    console.log('PROMISE LESSON');

    const renderHtmlText = (htmlText) => {
        HtmlElement.innerHTML = htmlText;
    }

    /** ID of Ant Man */
    const id1 = '5d86371fd55e2e2a30fe1cc3';
    
    /** ID that does not exist */
    // const id1 = '5d86371fd55e2e2a30fe1cc32';
    // const id2 = '5d86371fd55e2e2a30fe1cc32';

    /** ID of Falcon */
    const id2 = '5d86371f97c29d020f1e1f6d';
    
    /** PART 1: Calling a Promise
     */
    // findHero(id1)
    //     .then( (value) => renderHtmlText(value.name) )
    //     .catch( (error) => renderHtmlText(error) )
    //     .finally( () => console.log('Finally executes after a Promise is resolved regardless of the result') );
    
    /** PART 2: Calling a promise inside another
     * Is essentially the same as a Callback
     * Tends to lead to 'Promise Hell'
     * Avoid
     */
    // findHero(id1)
    //     .then( (hero1) => {
    //         findHero(id2)
    //             .then( (hero2) => {
    //                 renderHtmlText(`${hero1.name}<br>${hero2.name}`);
    //             })
    //             .catch( (error) => renderHtmlText(error) );
    //     } )
    //     .catch( (error) => renderHtmlText(error) );

    /**
     * PART 3: Chain of promises
     * Chain multiple promises by returning a Promise at the end of a resolved Promise
     * Only need 1 catch for all promises
     * May lead to 'Promise Hell' if poorly handled
     */
    // let hero1;

    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2)
    //     })
    //     .then( hero2 => {
    //         renderHtmlText(`${hero1.name}<br>${hero2.name}`);
    //     })
    //     .catch( (error) => renderHtmlText(error) );

    /** PART 4: Promise.all
     * Runs an array of promises
     * If all are resolved without issue returns an array of results
     * If one throws an error then runs the catch for all of them
     * Only use if the promises involved do not rely on each other
     */
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
        .then( ([hero1, hero2]) => renderHtmlText(`${hero1.name}<br>${hero2.name}`) )
        .catch( error => renderHtmlText(error) );

    /** PART 5: Promise Race
     * Similar to Promise.all, but only returns the value of the first Promise to be resolved
    */
    // Promise.race([
    //     slowPromise(),
    //     mediumPromise(),
    //     fastPromise()
    // ])
    //     .then( value => renderHtmlText(value) );
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise( (resolve, reject) => {
        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve(hero);
        }
        else{
            reject( `ERROR: Hero with ID: ${id} was not found`);
        }

    });

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('SLOW PROMISE');
    }, 2000);
});

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('MEDIUM PROMISE');
    }, 1500);
});

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('FAST PROMISE');
    }, 1000);
});