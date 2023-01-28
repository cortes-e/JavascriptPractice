import { Task } from "../models/task.model"
import { createTaskHtml } from "./";

let element;

export const renderTasks = (htmlElementId, task = []) => {
    
    if (!element)
        element = document.querySelector( htmlElementId );

    if (!element)
        throw new Error(`HTML element with the id ${htmlElementId} was not found`);

    element.innerHTML = '';

    task.forEach(task => {
        element.append( createTaskHtml(task) );
    });
}