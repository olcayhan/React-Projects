import React from 'react'
import { useState, useEffect } from 'react';
import { addTodo, getTodo } from '../axios';
import StartScreen from '../components/StartScreen';
import Todo from '../components/Todo';


export default function Important() {
    const [todos, setTodos] = useState([])

    useEffect(() => {

        getTodo()
            .then((res) => {
                setTodos([...res.data.other[0].todos])
            })
            .catch((err) => { console.log(err.message) });

    }, [0])

    console.log(todos);
  return (
    <div className='important-main'>
        {todos.length !== 0 ? todos.map(todo => {
                return !todo.complete && todo.important  ?
                    <Todo  todo={todo} /> : <span></span>
            }) : <StartScreen />}
    </div>
  )
}
