import { v4 as uuid } from "uuid";

export class Task {
    constructor( description ){
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdDate = new Date();
    }
}