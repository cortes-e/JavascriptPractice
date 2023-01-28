import { Task } from "../models/task.model";

export const createTaskHtml = ( task ) => {
    if(!task) {
        throw new Error('Task Object is required');
    }

    const { id, description, done } = task;

    const html = `<div class="view">
            <input class="toggle" type="checkbox" ${done? 'Checked' : ''}>
            <label> ${description} </label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);
   
    if (done)
        liElement.classList.add('completed');

    return liElement;
}