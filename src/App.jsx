import "./App.css";
import React from "react";
import TodoList from "./components/TodoList.jsx";
import initialTodos from "./todo.json";

class App extends React.Component {
  state = {
    todos: initialTodos,
    filter: "",
  };
  render() {
    return (
      <>
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default App;