import React from 'react'

export default function TodoItem({ todo }) {

  const onClick = () => {
    console.log('Deleting ' + todo.title)
  }

  return (
    <li className="todo-item">
      {todo.title}
      <span onClick={onClick}>&times;</span>
    </li>
  )
}
