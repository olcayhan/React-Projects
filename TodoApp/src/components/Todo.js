import React from 'react'
import { Button, Container, Row, Col } from "react-bootstrap"

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (

        <Container>
            <Row >
                <div class="form-check">
                    <input class="form-check-input m-3" type="checkbox" id={todo.id} onChange={handleTodoClick} />
                    <label class="form-check-label fs-3" for={todo.id}>{todo.name}</label>
                </div>

            </Row>
        </Container>
    )
}


