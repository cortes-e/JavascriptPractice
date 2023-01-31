
/**
 * 
 * @param {HTMLDivElement} HtmlElement 
 */
export const environmentsComponent = (HtmlElement) => {

    console.log('ENVIRONMENT VARIABLES LESSON');

    const html = `
        DEV: ${import.meta.env.DEV} <br>
        PROD: ${import.meta.env.PROD} <br>
        API KEY: ${import.meta.env.VITE_API_KEY} <br>
        URL: ${import.meta.env.VITE_BASE_URL} <br>
    `;

    HtmlElement.innerHTML = html;
}