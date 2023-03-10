import { Task } from '../task-list/models/task.model';

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
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
    loadStore();
    console.log('InitStore Pandea');
    console.log('STATE', state)
}

const loadStore = () => {
    console.log(localStorage.getItem('state'));
    if(localStorage.getItem('state')){
        const {tasks = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
        state.tasks = tasks;
        state.filter = filter;
    }
    // throw new Error ('Not implemented');
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

const addTask = ( description ) => {
    if (!description) {
        throw new Error ('Description must not be empty');
    }
    state.tasks.push(new Task(description));

    saveStateToStorage();
}

const toggleTask = ( taskId ) => {
    state.tasks = state.tasks.map( task => {
        if(task.id === taskId){
            task.done = !task.done;
        }
        return task;
    });

    saveStateToStorage();
}

const deleteTask = ( taskId ) => {
    state.tasks = state.tasks.filter( task => task.id !== taskId);

    saveStateToStorage();
}

const deleteCompletedTask = () => {
    state.tasks = state.tasks.filter( task => !task.done);

    saveStateToStorage();
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

const saveStateToStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

export default {
    initStore,
    loadStore,
    getTasks,
    addTask,
    toggleTask,
    deleteTask,
    deleteCompletedTask,
    setFilter,
    getCurrentFilter,
}