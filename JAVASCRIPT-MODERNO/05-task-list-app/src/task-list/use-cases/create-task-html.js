import { Task } from "../models/task.model";

export const createTaskHtml = ( task ) => {
    if(!task) {
        throw new Error('Task Object is required');
    }

    const html = `<h1> ${task.description} </h1>`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;

    return liElement;
}