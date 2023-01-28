import { Task } from "../models/task.model"
import { createTaskHtml } from "./create-task-html";

export const renderTasks = (htmlElementId, task = []) => {
    const element = document.querySelector( htmlElementId );

    task.forEach(task => {
        element.append( createTaskHtml(task) );
    });
}