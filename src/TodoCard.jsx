 
  function TodoCard(props) {
    const {title, body, isDone, changeStatus, onDelete} = props
  
    return (
      <div className="todo-card-container">
        <div className="todo-card__texts">
          <h1 className="todo-card__texts-title">{title}</h1>
          <p className="todo-card__texts-body">{body}</p>
        </div>
        <div className="todo-card__btns">
          <button className="todo-card__btns-done-revert" onClick={changeStatus}>{isDone === true ? "revert" : "done"}</button>
          <button className="todo-card__btns-delete" onClick={onDelete}>delete</button>
        </div>
      </div>
    )
  }

  export default TodoCard