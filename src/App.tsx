import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let today = new Date()
  let today_date = today.getDate()
  let today_day = today.getDay()
  let today_month = today.getMonth() + 1
  let today_year = today.getFullYear()
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  ];
  let [todo_data,setTodo_data] = useState(['블로그 작성','깃허브에 1커밋'])
  let [todo_input_data,setTodo_input_data] = useState('')
  return (
    <div className="App">
      <header id="header">
        <div className="header_inner">
          <h1>Todolist</h1>
          <nav className="gnb">
            <ul>
              <li>오늘 할일</li>
              <li>내일 할일</li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main">
        <div className="main_inner">
          <h2 className="today">
           오늘 <span>{today_year}년 {today_month}월 {today_date} 일 {days[today_day]}</span>
          </h2>
          <p className="todo_list">
            <ul>
              {todo_data.map((e,i)=>{
                return(
                  <li>{e}</li>
                )
              })}
            </ul>
          </p>
          <input onChange={(e)=>{
            setTodo_input_data(e.target.value)
          }} placeholder='오늘 할 일' type="text" /> 
          <button onClick={()=>{
            let copy_data = [...todo_data]
            copy_data.unshift(todo_input_data)
            setTodo_data(copy_data)
          }} className='write_btn'> + </button>
        </div>
      </main>
    </div>
  );  
}

export default App;
