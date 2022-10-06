import React, { useEffect, useState, useRef } from "react";
import Todo from "./components/Todo";
import { v4 as uuidv4 } from 'uuid';
import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"



export default function App() {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

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
        <Container >
            <Row className="justify-content-center m-4">
                <Col xs={12} md={6}>
                    <InputGroup className="mb-3">

                        <Form.Control ref={todoNameRef} placeholder="Add Task" />
                        <Button onClick={handleAddTodo} variant="secondary">Add Todo</Button>
                        <Button onClick={handleClearTodos} >Clear Completed Todos</Button>

                    </InputGroup>

                    <p> {todos.filter(todo => !todo.complete).length} left to do</p>

                    {
                        todos.map(todo => {
                            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}