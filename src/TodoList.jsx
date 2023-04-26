import TodoCard from './TodoCard';

function TodoList(props) {
    const {title, list, changeStatus, onDelete} = props
    const className = `todo-${title.toLowerCase()}`
    return (
      <div className={className}>
        <div className={`${className}__title`}>{title}</div>
        <div className={`${className}__entry`}>
          {list.map(td => {
            // console.log(td)
          return <TodoCard id={td.id} title={td.title} body={td.body} isDone={td.isDone} changeStatus={changeStatus} onDelete={onDelete}/>
          })}
        </div>
      </div>
    )
}   

export default TodoList;