import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Todo({ todo, toggleTodo }) {


    function completeTodo() {
        toggleTodo(todo.id)
    }

    return (

        <div className='todo--todos' >
            <button type="checkbox" className='todo--completebtn' onClick={completeTodo}><i className="fa fa-check" aria-hidden="true"></i></button>
            <span className='todo--text'>{todo.name}</span>
            <button className='todo--important'><i className="fa-regular fa-star"></i></button>
        </div >
    )
}

