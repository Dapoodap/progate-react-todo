import { TodoItem } from "./TodoItem"

export const Todos = ({todos,toggleCompleted,toggleDelete }) => {
 

  return (
    <div className="todoCompo">
      {todos.map((todo)=>(
        <>
        <TodoItem todo={todo} toggleDelete={toggleDelete} toggleCompleted={toggleCompleted}/>
        </>
      ))}
    </div>
  )
}