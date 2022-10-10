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
    function addNewTodo() {
        const name = todoNameRef.current.value
        if (name === "") return;
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
        })
        todoNameRef.current.value = null
    }


    let lengthOfCompleteTodo = todos.filter(todo => todo.complete === true)

    return (
        <Container className='m-2'>


            {/* show todos in here */}
            {todos.length !== 0 ? todos.map(todo => {
                return !todo.complete ?
                    <Todo toggleTodo={toggleTodo} todo={todo} /> : <span></span>
            }) : <StartScreen />}



            <div className='mt-5'>
                {
                    lengthOfCompleteTodo.length !== 0 ? <button className='todo--completedbtn'> v Completed {lengthOfCompleteTodo.length} </button> : <span></span>
                }

                <div style={{ visibility: "visible" }}>

                    {
                        lengthOfCompleteTodo.length !== 0 ?

                            todos.map((item) => {
                                return item.complete === true ? <Todo toggleTodo={toggleTodo} todo={item} /> : <span></span>
                            })
                            : <span></span>
                    }
                </div>
            </div>
            <Form.Group className='fixed-bottom d-flex flex-row' id='todo--footer'>


                <button className='todo-addbtn' onClick={addNewTodo} ></button>


                <input className='todo--input' ref={todoNameRef} type="text" placeholder='Add a task' onKeyPress={(e) => {
                    if (e.key === "Enter") addNewTodo();
                }} />

                <button className="todo--deletebtn" onClick={(e) => {
                    const newTodos = todos.filter(todo => todo.complete === false)
                    setTodos(newTodos)
                }} ><i className="fa-sharp fa-solid fa-trash"></i></button>

            </Form.Group>



        </Container >
    )
}
