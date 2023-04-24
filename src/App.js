// 구현사항
/*
1. 제목과 내용을 입력하고 '추가하기' 버튼을 클릭하면 working에 새로운 todo 추가, 제목 input & 내용 input은 다시 빈 값으로
2. Todo의 isDone이 true이면 상태 라벨을 취소, isDone이 false이면 라벨을 완료로 조건부 렌더링
3. Todo의 상태가 working이면 위쪽에, Done이면 아래쪽에 위치
4. Layout 최대 넓이 1200, 최소 넓이 800px 전체 화면 가운데 정렬
5. 컴포넌트 구조는 자유롭게
*/
import './App.css';
import React, {useState} from 'react'

function App() {
  // 1. ??
  const [todoObj, setTodoObj] = useState([])
  const [titleInput, setTitleInput] = useState("")
  const [bodyInput, setBodyInput] = useState("")


  const [todo, setTodo] = useState({title:"", body:""})
  // 2. ??
  // ㅍㅏ새ㅇ 상태
  // const [ingList, setIngList] = useState([])
  // 3. ??
  // const [completedList, setCompletedList] = useState([])
  
  


  const ingList = todoObj.filter(todo => !todo.isDone)
  const completedList = todoObj.filter(todo => todo.isDone)

    const handleChange =(event) => {
      const {value, name} = event.target

      setTodo({...todo,[name]:value})

    }

  const onTitleChangeHandler = (event) =>{

    ////

    //
    //
    
    setTitleInput(event.target.value)
  }
  const onBodyChangeHandler = (event) =>  setBodyInput(event.target.value)
  
  const todoSubmitHandler = () => {
    // const newTodoObj = {
    //   id: todoObj.length,
    //   title: titleInput,
    //   body: bodyInput,
    //   isDone: false
    // }
    const newTodoObj = {
      id: todoObj.length,
      title: todo.title,
      body: todo.body,
      isDone: false
    }


    // 불변성 유지
    // todoObj.push(newTodoObj)
    setTodoObj((prev)=> [...prev, newTodoObj])
    // const processing = Object.values(todoObj).filter(obj => !obj.isDone)
    // const completed = Object.values(todoObj).filter(obj => obj.isDone)
    // setIngList(processing)
    // setCompletedList(completed)
    // console.log(todoObj)
  }
  // const todoCardDrawer = (todoObj) => {    

  // }
  return (
    <div className="todo-wrap">
      <div className="todo-container">
        <div className="todo-input">
          <div className="todo-input__title-box">
            <span className="todo-input__title-span">todo title</span>
            <input name="title" className="todo-input__title-input" type="text" 
                    onChange={handleChange}
                    value={todo.title}
            // onChange={onTitleChangeHandler} 
            // value={titleInput}
            ></input>
          </div>
          <div className="todo-input__body-box">
            <span className="todo-input__body-span">todo what?</span>
            <input name="body" className="todo-input__body-input" type="text" 
            // onChange={onBodyChangeHandler} 
            onChange={handleChange}
            value={todo.body}
            // value={bodyInput}
            ></input>          
          </div>
          <button className="todo-input__submit-btn" onClick={() => {
            todoSubmitHandler()
            // todoCardDrawer({todoObj})
          }}>add this todo</button>
        </div>
        <div className="todo-progressing">
          <div className="todo-progressing__title">Progressing</div>
          <div className="todo-progressing__entry">
            {/* {Object.values(ingList).map(obj => {
              if (obj.id === undefined) {
                return ""
              } else {
                console.log("no entries")
                return <TodoCard key={obj.id} id={obj.id} title={obj.title} body={obj.body} isDone={obj.isDone}/>
              }
            })} */}
            {/* <TodoCard id={ingList.id} title={ingList.title} body={ingList.body} isDone={ingList.isDone}/> */}
            {ingList.map(todo=> <TodoCard key={todo.id} id={todo.id} title={todo.title} body={todo.body} isDone={todo.isDone}/>)}
          </div>
        </div>
        <div className="todo-complete">
          <div className="todo-complete__title">Completed</div>
          <div className="todo-complete__entry">
            {completedList.map(todo=> <TodoCard key={todo.id} id={todo.id} title={todo.title} body={todo.body} isDone={todo.isDone}/>)}
            {/* {Object.values(completedList).map(obj => {
                console.log(obj)
                return <TodoCard key={obj.id} id={obj.id} title={obj.title} body={obj.body} isDone={obj.isDone}/>
              })}          */}
          {/* <TodoCard id={completedList.id} title={completedList.title} body={completedList.body} isDone={completedList.isDone}/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function TodoCard({id, title, body, isDone}) {
  console.log(title)
  console.log(body)
  return (
    <div className="todo-card-container">
      <div className="todo-card__texts">
        <h1 className="todo-card__texts-title">{title}</h1>
        <p className="todo-card__texts-body">{body}</p>
      </div>
      <div className="todo-card__btns">
        <button className="todo-card__btns-done-revert">{isDone === true ? "revert" : "done"}</button>
        <button className="todo-card__btns-delete">delete</button>
      </div>
    </div>
  )
}

export default App;
