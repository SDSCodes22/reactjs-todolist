import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]) // Make a stateful variable - that user interacts with. function setTodos to change it
  const [todoValue, setTodoValue] = useState('')

  // Persist TODO data in Local Storage
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }
  // Function to add new todos, do it like this because conventions
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todos, todosIndex) => {
      return todosIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  useEffect(() => {
    if(!localStorage) {
      return
    }
    
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList handleDeleteTodo = {handleDeleteTodo} handleEditTodo = {handleEditTodo} todos={todos}/>

    </>
  )
}

export default App