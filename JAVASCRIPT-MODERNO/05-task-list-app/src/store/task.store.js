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
        new Task('Task 3'),
        new Task('Task 4'),
        new Task('Task 5'),
        new Task('Task 6'),
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
    switch (filter){
        case Filters.All:
            return [...state.tasks];
        case Filters.Completed:
            return state.tasks.filter(task => task.done);
        case Filters.Pending:
            return state.tasks.filter(task => !task.done);
        default:
            throw new Error(`Option ${filter} is not valid`)
    }
}

const addtask = ( description ) => {
    if (!description) {
        throw new Error ('Description must not be empty');
    }
    state.tasks.push(new Task(description));
}

const toggleTask = ( taskId ) => {
    state.tasks = state.tasks.map( task => {
        if(task.id === taskId){
            task.done = !task.done;
        }
        return task;
    });
    throw new Error ('Not implemented');
}

const deleteTask = ( taskId ) => {
    state.tasks = state.tasks.filter( task => task.id !== taskId);
}

const deleteCompletedTask = () => {
    state.tasks = state.tasks.filter( task => task.done);
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
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