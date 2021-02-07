import React from "react";
import { observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value;
  }

  render() {
    const { filter, filterTodos, todos } = this.props.store;

    const todoList = filterTodos.map(todo => (
      <li>{todo}</li>
    ));
    return <div>
      <h1>todos</h1>
      <input class="create" onKeyPress={this.createNew.bind(this)} />
      <input class="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoList}</ul>
    </div>;
  };
}
