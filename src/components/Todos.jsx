import { useState } from "react"

export const Todos = () => {
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
    <div className="todoCompo">
      {todos.map((todo)=>(
        <>
        <h3>{todo.title}</h3>
        </>
      ))}
    </div>
  )
}