 
  function TodoCard(props) {
    const {id, title, body, isDone, changeStatus, onDelete} = props
    const changingClass = isDone === true ? "" : "hidden"
  
    return (
      <div className="todo-card-container">
        <div className="todo-card__texts">
          <div className="todo-card__texts-header">
            <p className="todo-card__texts-title">{title}</p>
            <svg className={changingClass} width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z" fill="#005C53"/></svg>
          </div>
          <p className="todo-card__texts-body">{body}</p>
        </div>
        <div className="todo-card__btns">
          <button className={"todo-card__btns-done-revert id-" + id} onClick={changeStatus}>{isDone === true ? "revert" : "done"}</button>
          <button className={"todo-card__btns-delete id-" + id} onClick={onDelete}>delete</button>
        </div>
      </div>
    )
  }

  export default TodoCard