import { TodoItem } from "./TodoItem"

export const Todos = ({todos,toggleCompleted }) => {
 

  return (
    <div className="todoCompo">
      {todos.map((todo)=>(
        <>
        <TodoItem todo={todo} toggleCompleted={toggleCompleted}/>
        </>
      ))}
    </div>
  )
}