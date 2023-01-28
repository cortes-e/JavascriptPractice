import html from './app.html?raw';
import taskStore from '../store/task.store';
import { renderTasks } from './use-cases';

const ElementIds = {
    TaskList: '.todo-list',
    CreateTask: '#new-todo-input',
}

export const App = (elementId) => {
    
    const displayTasks = () => {
        const tasks = taskStore.getTasks( taskStore.getCurrentFilter() );
        renderTasks(ElementIds.TaskList, tasks);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTasks();
    })();

    const newDescriptionInput = document.querySelector(ElementIds.CreateTask);

    newDescriptionInput.addEventListener('keyup', (event) => {
        if(event.keyCode === 13 && event.target.value.trim().length > 0){
            taskStore.addTask( event.target.value );
            displayTasks();
            event.target.value = '';
        }
    } )
}