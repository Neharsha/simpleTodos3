// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, onDeleteTodo} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="container">
      <div className="headingContainer">
        <p className="heading">{title}</p>
      </div>
      <div className="buttonContainer">
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
