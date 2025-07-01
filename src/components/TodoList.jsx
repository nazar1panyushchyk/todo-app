import React from 'react';
export default class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <h2>Todo List</h2>
                <ul>
                    <li>Learn React</li>
                    <li>Build a Todo App</li>
                    <li>Deploy the App</li>
                </ul>
            </div>
        );
    }
}