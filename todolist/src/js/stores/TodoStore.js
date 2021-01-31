/* This file will be filled with on the lesson */
import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 113464613,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 235684679,
                text: "Pay Watter Bills",
                complete: false
            }
        ];
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        });
        console.log("createTodo");
        console.log(this.todos);
        this.emit("change");
    }

    receiveTodos(todos) {
        console.log("receiveTodos");
        console.log(this.todos);
        this.todos = todos;
        console.log(this.todos);
        this.emit("change");
    }

    getAll() {
        console.log("getAll");
        console.log(this.todos);
        return this.todos;
    }

    handleActions(action) {
        switch (action.type) {
            case "CREATE_TODO": {
                console.log("CREATE_TODO");
                this.createTodo(action.text);
                break;
            }
            case "RECEIVE_TODOS": {
                console.log("RECEIVE_TODOS");
                this.receiveTodos(action.todos);
                break;
            }
        }
        console.log("handleActions");
        console.log(this.todos);
        console.log("TodoStore received an action", action);
    }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore = todoStore;
window.dispatcher = dispatcher;
export default todoStore;