import React, { useState, useRef, useEffect } from 'react'
import { Form, Container } from 'react-bootstrap'
import Todo from '../components/Todo'
import StartScreen from '../components/StartScreen'
import { addTodo, getTodo } from '../axios'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList({ user }) {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    useEffect(() => {

        getTodo()
            .then((res) => {
                setTodos([...res.data.other[0].todos])
            })
            .catch((err) => { console.log(err.message) });

    }, [0])


    let constTodo = {
        email: user,
        todos: todos
    }


    useEffect(() => {
        if (user !== null) {
            addTodo(constTodo)
                .then((res) => { console.log("succes") })
                .catch((err) => console.log(err))
        }
    }, [todos])



    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function importantTodos(id) {
        const newTodos = [...todos]
        console.log(newTodos);
        const todo = newTodos.find(todo => todo.id === id)
        todo.important = !todo.important
        setTodos(newTodos)
    }
    function addNewTodo() {
        const name = todoNameRef.current.value
        if (name === "") return;
        setTodos(prevTodos => {
            return [{ id: uuidv4(), name: name, complete: false, important: false }, ...prevTodos]
        })
        todoNameRef.current.value = null
    }


    let lengthOfCompleteTodo = todos.filter(todo => todo.complete === true);
    const [completeControl, setCompleteControl] = useState(true)


    todos.sort(function (x, y) {
        return (x.important === y.important) ? 0 : x.important ? -1 : 1;

    });


    return (
        <div className='todos-main'>

            {todos.length !== 0 ? todos.map(todo => {
                return !todo.complete ?
                    <Todo toggleTodo={toggleTodo} todo={todo} completeControl={completeControl} importantTodos={importantTodos} /> : <span></span>
            }) : <StartScreen />}


            <div className='mt-4'>
                {
                    lengthOfCompleteTodo.length !== 0 ?
                        <button className='todo--completedbtn'
                            onClick={() => {
                                if (completeControl) setCompleteControl(false)
                                else setCompleteControl(true)
                                console.log(completeControl);
                            }}>

                            <i className="fa fa-angle-down me-2" style={completeControl ? { transform: "rotate(0deg)", transition: "all 0.3s ease" } : { transform: "rotate(-90deg)", transition: "all 0.3s ease" }}></i>
                            Completed
                            <span className='ms-2 me-2'>{lengthOfCompleteTodo.length}</span>

                        </button> : <span></span>
                }

                <div style={(completeControl) ? { visibility: "visible" } : { visibility: "hidden" }}>

                    {
                        lengthOfCompleteTodo.length !== 0 ?
                            todos.map((item) => {
                                return item.complete === true ? <Todo toggleTodo={toggleTodo} todo={item} completeControl={completeControl} importantTodos={importantTodos} /> : <span></span>
                            })
                            : <span></span>
                    }

                </div>
            </div>
            <div className='fixed-bottom d-flex flex-row' id='todo--footer'>


                <button className='todo-addbtn' onClick={addNewTodo} ></button>


                <input className='todo--input' ref={todoNameRef} type="text" placeholder='Add a task' onKeyPress={(e) => {
                    if (e.key === "Enter") addNewTodo();
                }} />

                <button className="todo--deletebtn" onClick={(e) => {
                    const newTodos = todos.filter(todo => todo.complete === false)
                    setTodos(newTodos)
                }} ><i className="fa-sharp fa-solid fa-trash"></i></button>

            </div>
        </div >
    )
}
