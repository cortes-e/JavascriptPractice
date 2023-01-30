import taskStore, { Filters } from "../../store/task.store"

let element;

export const renderPendingTasks = (htmlElementId) => {
    if (!element)
        element = document.querySelector( htmlElementId );

    if (!element)
        throw new Error(`HTML element with the id ${htmlElementId} was not found`);

    element.innerHTML = taskStore.getTasks( Filters.Pending ).length;


}