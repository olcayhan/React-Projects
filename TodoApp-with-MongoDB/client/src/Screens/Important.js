import React from 'react'
import { useState, useEffect } from 'react';
import { getTodo } from '../axios';
import StartImport from '../components/StartImport';
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
        return !todo.complete && todo.important ?
          <Todo todo={todo} /> : <span></span>
      }) : <StartImport />}
    </div>
  )
}
