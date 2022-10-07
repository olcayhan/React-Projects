import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { register } from '../axios'

export default function SignUpScreen() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullname: "",
        password: "",
        phoneNumber: "",
        email: "",
        todos:[]
    })

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (
            formData.password.length >= 8 &&
            formData.fullname.length >= 3 &&
            formData.phoneNumber.length >= 10 &&
            formData.email.length >= 5
        ) {
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }, [formData])

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form onSubmit={(e) => {
                        e.preventDefault()

                        register(formData)
                            .then((res) => {
                                navigate("/signin")
                            })
                            .catch((err) => { console.log(err); })
                    }}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} type='text' placeholder='Enter name' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} type='email' placeholder='Enter email' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} type='password' placeholder='Password' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Password Again</Form.Label>
                            <Form.Control type='password' placeholder='Enter password again' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} type='text' placeholder='Phone number' />
                        </Form.Group>

                        <Form.Group className='d-grid'>
                            <Button disabled={disabled} type='submit' variant='primary' size='lg' className='mt-4'>
                                Sing Up
                            </Button>
                            <Form.Text className='text-center mt-2'>
                                Do you have an Account ?
                                <Link to="/signin">Sign Up</Link>
                            </Form.Text>

                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
