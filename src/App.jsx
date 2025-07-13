import "./App.css";
import TodoList from "./components/TodoList.jsx";
import initialTodos from "./todo.json";
import { Component } from "react";
import TodoEditor from "./components/TodoEditor.jsx";
import Filter from "./components/Filter.jsx";
import Info from "./components/Info.jsx";
import styled from "styled-components";


const TodoInterface = styled.div`
  background-color: #beef00;
  width: 550px;
  height: 550px;
  border-radius: 50px;
  color: black;
  font-weight: bold;
`;


class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  onToggleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  onDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };
  handleFilter = (value) => {
    this.setState({ filter: value });
  };
  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <TodoInterface>
        <Info
          total={this.state.todos.length}
          completed={this.state.todos.filter((todo) => todo.completed).length}
        />
        <TodoEditor onSubmit={this.addTodo} />
        <Filter onFilterChange={this.handleFilter} value={this.state.filter} />
        <TodoList
          todos={this.getFilteredTodos()}
          onToggleCompleted={this.onToggleCompleted}
          onDelete={this.onDelete}
          handleFilter={this.handleFilter}
        />
      </TodoInterface>
    );
  }
}

export default App;
