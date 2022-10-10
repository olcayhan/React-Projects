import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Todo({ todo, toggleTodo }) {


    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <Col className='todo--todos' >
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            {todo.name}

        </Col >
    )
}

