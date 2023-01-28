import html from './app.html?raw';
import taskStore from '../store/task.store';
import { renderTasks } from './use-cases';

const HtmlElementId = {
    TaskList: '.todo-list',
    CreateTask: '#new-todo-input',
    clearCompletedTasks: '.clear-completed'
}

export const App = (elementId) => {
    
    const displayTasks = () => {
        const tasks = taskStore.getTasks( taskStore.getCurrentFilter() );
        renderTasks(HtmlElementId.TaskList, tasks);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTasks();
    })();

    // HTML references
    const createTaskListInput = document.querySelector(HtmlElementId.CreateTask);
    const taskList = document.querySelector(HtmlElementId.TaskList);
    const clearCompletedButton = document.querySelector(HtmlElementId.clearCompletedTasks);


    // Listeners
    createTaskListInput.addEventListener('keyup', (event) => {
        if(event.keyCode === 13 && event.target.value.trim().length > 0){
            taskStore.addTask( event.target.value );
            displayTasks();
            event.target.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        const taskId = event.target.closest('[data-id]').getAttribute('data-id');
        taskStore.toggleTask(taskId);
        displayTasks();
    });

    taskList.addEventListener('click', (event) => {
        if(event.target.className === 'destroy'){
            const taskId = event.target.closest('[data-id]').getAttribute('data-id');
            console.log('TASK ID', taskId);
            taskStore.deleteTask(taskId);
            displayTasks();
        }
    });

    clearCompletedButton.addEventListener('click', (event) => {
        taskStore.deleteCompletedTask();
        displayTasks();
    });
}