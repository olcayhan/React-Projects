import React from 'react'

export default function Todo({ todo, toggleTodo }) {


    function completeTodo() {
        toggleTodo(todo.id)
    }

    return (

        <div className='todo--todos' >
            <button
                type="checkbox"
                className='todo--completebtn'
                
                onClick={completeTodo}>
                <i className="fa fa-check" style={(todo.complete)?{ visibility: "visible" }:{visibility: "hidden"}} aria-hidden="true"></i>
            </button>

            <span className='todo--text' style={(todo.complete)?{ textDecoration:"line-through" }:{textDecoration:"default"}} >{todo.name}</span>

            <button className='todo--important'><i className="fa-regular fa-star"></i></button>

        </div >
    )
}

