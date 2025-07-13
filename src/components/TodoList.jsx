import { Component } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TaskList = styled.div`
  margin-top: 10px;
  background-color: #d1ff1aff;
  border: solid #abc838 2px;
`;

export default class TodoList extends Component {
  render() {
    const { todos, onToggleCompleted, onDelete } = this.props;
    return (
      <TaskList className="todo-list">
        {todos.map(({ id, text, completed }) => (
          <TodoItem
            key={id}
            id={id}
            text={text}
            completed={completed}
            onToggleCompleted={onToggleCompleted}
            onDelete={onDelete}
          />
        ))}
      </TaskList>
    );
  }
}
