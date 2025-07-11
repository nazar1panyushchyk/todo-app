import React from 'react';

export default class Info extends React.Component {
    render() {
        return (
            <>
            <p>Всього завдань: {this.props.total}</p>
            <p>Виконано: {this.props.completed}</p>
            </>
        )
    }
}