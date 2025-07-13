import React from "react";
import styled from "styled-components";

const TaskText = styled.span`
  &.crossing {
    text-decoration: line-through;
  }
  margin: 10px;
  flex: 1;
  min-width: 0;
`;
const DeleteButton = styled.button`
  background-color: #657a00;
  border: solid 2px black
`;
const Todo = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default class TodoItem extends React.Component {
  render() {
    const { id, text, completed, onToggleCompleted, onDelete } = this.props;
    return (
      <Todo>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <TaskText className={completed ? 'crossing' : ''}>{text}</TaskText>
        <DeleteButton className="delete-button" onClick={() => onDelete(id)}>
          Delete
        </DeleteButton>
      </Todo>
    );
  }
}
