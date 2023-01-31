import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} HtmlElement 
 */
export const asyncComponent = async (HtmlElement) => {

    console.log('ASYNC FUNCTIONS LESSON');

    /** ID of Ant Man */
    const id1 = '5d86371fd55e2e2a30fe1cc3';
    
    /** ID of Falcon */
    const id2 = '5d86371f97c29d020f1e1f6d';
    
    /** ID that does not exist (used to see behavior of catch) */
    const idError = '5d86371fd55e2e2a30fe1cc32'
    // const id1 = idError;
    // const id2 = idError;

    /** PART 1: Async functions
     * Async functions work very similarly to promises
     * Code below the async function is run before the async function is executed
    */
    // findHero(id1)
    //     .then((data) => HtmlElement.innerHTML = data.name)
    //     .catch((error) => HtmlElement.innerHTML = error);

    /** PART 2: Await
     * Can only be used in the upper-most scope of async functions
     * With this keyword, code below the async function must wait for the function to finish before they execute
     * Can help avoid 'Callback Hell' or 'Promise Hell', but may be at the cost of performance
     * To fetch error it's necessary to use 'try/catch'
    */
    // try {
    //     const hero1 = await findHero( id1 );
    //     const hero2 = await findHero( id2 );
    
    //     HtmlElement.innerHTML = `${hero1.name} / ${hero2.name}`;
    // } catch (error) {
    //     HtmlElement.innerHTML = error;
    // }

    /**
     * PART 3: Optimize
     * The case before is only useful if an async function relies on another
     * But for a case were the functions are independent of each other, there is a better way to do it
     */

    /** In this way it will take 4.5+ secs to execute everything as it is done one by one */ 
    
    // console.time('Start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    // console.timeEnd('Start');

    /** With an await Promise.all the functions are executed concurrently. In this case it will take 2+ secs to execute */
    
    // console.time('Start');
    
    // const [value1, value2, value3] = await Promise.all([
    //     slowPromise(),
    //     mediumPromise(),
    //     fastPromise(),
    // ]);
    
    // console.timeEnd('Start');
    
    // HtmlElement.innerHTML = `
    //     value1: ${value1} <br>
    //     value2: ${value2} <br>
    //     value3: ${value3} <br>
    // `;

    /** PART 4: For await */
    const heroIds = heroes.map(hero => hero.id);

    const heroPromises = getHeroesAsync(heroIds);

    for await(const hero of heroPromises)
        HtmlElement.innerHTML += `${hero.name} <br>`;
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = async (id) => {

    const hero = heroes.find( hero => hero.id === id); 

    if(!hero)
        throw `ERROR: Hero with ID: ${id} was not found`;

    return hero;

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

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}