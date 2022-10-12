import React from 'react'

export default function Todo({ todo, toggleTodo, completeControl, importantTodos }) {


    function completeTodo() {
        toggleTodo(todo.id)
    }
    function importantTodo() {
        importantTodos(todo.id)
    }

    return (

        <div className='todo--todos' >
            <button
                type="checkbox"
                className='todo--completebtn'
                onClick={completeTodo}
                style={(todo.complete && completeControl) ? { backgroundColor: "#748DA6", color: "white", border: "none" } : {}}>

                <i className="fa fa-check" style={(todo.complete && completeControl) ? { visibility: "visible" } : {}} aria-hidden="true"></i>

            </button>

            <span className='todo--text' style={(todo.complete) ? { textDecoration: "line-through" } : { textDecoration: "default" }} >{todo.name}</span>

            <button className='todo--important' onClick={importantTodo}>
                {(!todo.important) ?
                    <i className="fa-regular fa-star"></i> :
                    <i className="fa-solid fa-star" style={{color: "#748DA6" }} ></i>}
            </button>

        </div >
    )
}

