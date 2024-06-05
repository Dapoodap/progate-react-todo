
export const TodoItem = ({todo,toggleCompleted }) => {
 
  const styles = {
    checkbox: {
      marginRight: '10px',
      height: '30px',
      width: '30px',
      cursor: 'pointer',
    }
  }
  return (
    <div className="todoItem">
      <input onChange={()=>{toggleCompleted(todo.id)}}  type="checkbox" style={styles.checkbox}/>
      <p className={todo?.completed && `done`}>{todo?.title}</p>
    </div>
  )
}
