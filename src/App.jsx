import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import initialTodos from "./todo.json";
import TodoEditor from "./components/TodoEditor";

class App extends React.Component {
  state = {
    todos: initialTodos,
    filter: "",
  };
  render() {
    return (
      <>
        <TodoEditor />
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default App;
