import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoAction";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentDidMount() {
    // todoStore.on("change", () => {
    //   this.setState({
    //     todos: TodoStore.getAll()
    //   });
    //   console.log("componentDidMount.change");
    //   console.log(this.state);
    // });
    TodoStore.on("change", this.getTodos);
    console.log("count", TodoStore.listenerCount("change"));
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  createTodo() {
    TodoActions.createTodo("New Todo");
  }

  reloadTodo() {
    TodoActions.reloadTodo();
  }

  render() {
    const { todos } = this.state;
    console.log("render");
    console.log(this.state);
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <button onClick={this.reloadTodo.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

