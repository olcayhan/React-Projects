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

  let importants = todos.filter((todos) =>
    todos.important === true
  )

console.log(importants);

  return (
    <div className='important-main'>
      {importants.length !== 0 ? todos.map(todo => {
        return !todo.complete && todo.important ?
          <Todo todo={todo} /> : <span></span>
      }) : <StartImport />}
    </div>
  )
}
