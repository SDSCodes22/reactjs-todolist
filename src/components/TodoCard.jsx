import React from 'react'

export default function TodoCard(props) {
  const {children,handleDeleteTodo,handleEditTodo,index } = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={(e) => {
          handleEditTodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={(e) => {
          handleDeleteTodo(index)
        }}>
        <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
