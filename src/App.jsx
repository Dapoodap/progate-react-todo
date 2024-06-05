import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  const toggleCompleted = (id) => {
    const updatedTodo =  todos.map((todo)=>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodo)
  }
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  return (
    <>
    <h1 className='tittle'>My Todo List!</h1>
    <Todos todos={todos} toggleCompleted={toggleCompleted}/>
    </>
  )
}

export default App
