import { TodoItem } from "./TodoItem"

export const Todos = ({todos}) => {
 

  return (
    <div className="todoCompo">
      {todos.map((todo)=>(
        <>
        <TodoItem id={todo.id} todo={todo}/>
        </>
      ))}
    </div>
  )
}