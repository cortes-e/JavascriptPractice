import './style.css';
import { App } from './src/task-list/app.js';
import taskStore from './src/store/task.store';

taskStore.initStore();

App('#app');