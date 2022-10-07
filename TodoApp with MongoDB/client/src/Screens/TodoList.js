import React, { useState, useRef, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Todo from '../components/Todo'
import { addTodo } from '../axios'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "local.1"

export default function TodoList({ user }) {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()
    const prevTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    useEffect(() => {
        setTodos(prevTodo)
    }, [0])

    let userTodo = {
        email: user,
        todos: [todos]
    }
    if (user !== null) {
        addTodo(userTodo)
            .then((res) => {
                console.log("Updated Succesfully")
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(res.data.todos[0]))
            })
            .catch((err) => console.log(err))
    }







    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === "") return
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
        })
        todoNameRef.current.value = null
    }
    function handleClearTodos() {
        const newTodos = todos.filter(todo => todo.complete === false)
        setTodos(newTodos)
    }

    return (
        <Container className='m-3'>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Control ref={todoNameRef} type="text" />
                    <Button onClick={handleAddTodo} >Add Todo</Button>
                    <Button onClick={handleClearTodos} >Clear Completed Todos</Button>
                    <div> {todos.filter(todo => !todo.complete).length} left to do</div>
                </Col>
            </Row>
            {todos.map(todo => {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })}

        </Container>
    )
}
