import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { login } from "../axios"

export default function AuthScreen({ setUser }) {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    return (

        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form onSubmit={(e) => {
                        e.preventDefault()

                        login(formData)
                            .then((res) => {
                                localStorage.setItem('user', JSON.stringify(res.data.user.email))
                                setUser(res.data.user.email)
                                navigate("/home")
                            })
                            .catch((err) => { console.log(err.response.data.message); })
                    }}>
                        <Form.Group className='mb-3 text-white' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} type='email' placeholder='Enter email' />
                        </Form.Group>
 
                        <Form.Group className='mb-3 text-white' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} type='password' placeholder='Password' />
                        </Form.Group>

                        <Form.Group className='d-grid'>
                            <Button disabled={formData.email === "" || formData.password === ""} type='submit' variant='primary' size='lg'>
                                Sign In
                            </Button>
                            <Form.Text className='text-center mt-2 text-white'>
                                Don't have an Account ?
                                <Link to="/signup">Sign Up</Link>
                            </Form.Text>

                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
