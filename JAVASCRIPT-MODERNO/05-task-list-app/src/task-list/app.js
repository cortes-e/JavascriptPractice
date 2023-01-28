import html from './app.html?raw';
import taskStore from '../store/task.store';
import { renderTasks } from './use-cases';

const ElementIds = {
    TaskList: '.task-list',
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
}