import { Task } from '../task-list/models/task.model';

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pendin',
}

const state = {
    tasks: [
        new Task('Task 1'),
        new Task('Task 2'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log('InitStore Pandea');
    console.log('STATE', state)
}

const loadStore = () => {
    throw new Error ('Not implemented');
}

const getTasks = ( filter ) => {
    throw new Error ('Not implemented');
}

const addtask = ( description ) => {
    throw new Error ('Not implemented');
}

const toggleTask = ( taskId ) => {
    throw new Error ('Not implemented');
}

const deleteTask = ( taskId ) => {
    throw new Error ('Not implemented');
}

const deleteCompletedTask = () => {
    throw new Error ('Not implemented');
}

const setFilter = ( newFilter = Filters.All ) => {
    throw new Error ('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error ('Not implemented');
}

export default {
    initStore,
    loadStore,
    getTasks,
    addtask,
    toggleTask,
    deleteTask,
    deleteCompletedTask,
    setFilter,
    getCurrentFilter,
}