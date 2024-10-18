import { useState } from 'react'
import TodoCard from './TodoCard'


export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <input placeholder="Enter todo..." value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value) // e stands for event
            }}/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )

}