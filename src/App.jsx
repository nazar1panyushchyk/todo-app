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
  addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }))
  }
  render() {
    return (
      <>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default App;
