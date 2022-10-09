import React, { useState, useRef, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Todo from '../components/Todo'
import { addTodo, getTodo } from '../axios'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList({ user }) {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    let userTodo = {
        email: user,
        todos: todos
    }

    useEffect(() => {

        getTodo()
            .then((res) => {
                setTodos([...res.data.other[0].todos])
            })
            .catch((err) => { console.log(err.message) });

    }, [0])


    useEffect(() => {
        if (user !== null) {
            addTodo(userTodo).then((res) => { console.log("succes") }).catch((err) => console.log(err))
        }
    }, [todos])



    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }



    return (
        <Container className='m-3'>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form.Control ref={todoNameRef} type="text" />

                    <Button onClick={(e) => {

                        const name = todoNameRef.current.value
                        if (name === "") return
                        setTodos(prevTodos => {
                            return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
                        })
                        todoNameRef.current.value = null

                    }} >Add Todo</Button>


                    <Button onClick={(e) => {
                        const newTodos = todos.filter(todo => todo.complete === false)
                        setTodos(newTodos)
                    }} >Clear Completed Todos</Button>


                    <div> {todos.filter(todo => !todo.complete).length} left to do</div>
                </Col>
            </Row>


            {todos.map(todo => {
                return <Todo toggleTodo={toggleTodo} todo={todo} />
            })}

        </Container>
    )
}
