// 구현사항
/*
1. 제목과 내용을 입력하고 '추가하기' 버튼을 클릭하면 working에 새로운 todo 추가, 제목 input & 내용 input은 다시 빈 값으로
2. Todo의 isDone이 true이면 상태 라벨을 취소, isDone이 false이면 라벨을 완료로 조건부 렌더링
3. Todo의 상태가 working이면 위쪽에, Done이면 아래쪽에 위치
4. Layout 최대 넓이 1200, 최소 넓이 800px 전체 화면 가운데 정렬
5. 컴포넌트 구조는 자유롭게
*/
/*
state를 쓸데없이 많이 만드는 건 좋지 않다!(파생 상태) state를 많이 쪼개지 말고 다른 함수를 이용해 처리할 수 있는지를 먼저 생각해보기! 
불변성을 꼭 유지해주기...!
*/
// useReducer (조금 더 복잡한 상태의 관리)
import './App.css';
import "./TodoCard.css"
import "./TodoList.css"
import TodoList from "./TodoList"
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const INITIAL_TODO = {title:"", body:""}

function App() {
  const [todoObj, setTodoObj] = useState([])
  const [todo, setTodo] = useState(INITIAL_TODO)

  const ingList = todoObj.filter(todo => !todo.isDone)
  const completedList = todoObj.filter(todo => todo.isDone)


  const resetTodo = () => setTodo(INITIAL_TODO)
  
  const todoChangeTracker =(event) => {
    const {value, name} = event.target
    setTodo({...todo,[name]:value})
  }

  
  const todoSubmitHandler = () => {
    const newTodoObj = {
      id: uuidv4(),
      title: todo.title,
      body: todo.body,
      isDone: false
    }
    // 불변성 유지
    setTodoObj((prev)=> [...prev, newTodoObj])
    resetTodo()
  }

  const pickThisTodo = (event) => {
    const id = event.target.className.split(" ")[1].replace("id-", "")
    const thisTodo = todoObj.filter(v => v.id === id)
    return thisTodo
  }

  const statusChangeHandler = (event) => {
    const thisTodo = pickThisTodo(event)[0]
    const changedTodo = {...thisTodo, isDone: !(thisTodo.isDone)}
    const changedTodos = todoObj.filter(v => v.id !== thisTodo.id)
    setTodoObj([...changedTodos, changedTodo])
  }

  const todoDelete = (event) => {
    const id = pickThisTodo(event)[0].id
    const changedTodos = todoObj.filter(v => v.id !== id)
    setTodoObj([...changedTodos])
  }

  return (
    <div className="todo-wrap">
      <div className="todo-container">
        <div className="todo-intro">
          <h1>Minimal-todo</h1>
          <p>Simple and minimal todo. Just write a todo and start organizing your life.</p>
        </div>
        <div className="todo-input">
          <div className="todo-input__title-box">
            <span className="todo-input__title-span">todo title</span>
            <input name="title" className="todo-input__title-input" type="text" placeholder='Write a title of your todo'
              onChange={todoChangeTracker}
              value={todo.title}
            ></input>
          </div>
          <div className="todo-input__body-box">
            <span className="todo-input__body-span">todo what?</span>
            <input name="body" className="todo-input__body-input" type="text" placeholder='give some specific memos on your todo'
              onChange={todoChangeTracker}
              value={todo.body}
            ></input>          
          </div>
          <button className="todo-input__submit-btn" onClick={() => {
            todoSubmitHandler()
          }}>add this todo</button>
        </div>
        <TodoList title="Progressing" list={ingList} changeStatus={statusChangeHandler} onDelete={todoDelete} />
        <TodoList title="Complete" list={completedList} changeStatus={statusChangeHandler} onDelete={todoDelete} />
      </div>
    </div>
  )
}

export default App;
