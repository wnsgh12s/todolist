import { useEffect, useState } from "react"

interface TodayProps {
  today : Date;
  today_date : number;
  today_day : number;
  today_month : number;
  today_year :number;
  days :string[]
}

function Main({today,today_date,today_day,today_month,today_year,days}:TodayProps){
  let [todo_data,setTodo_data] = useState(['블로그 작성','깃허브에 1커밋'])
  let [todo_input_data,setTodo_input_data] = useState('')
  function pushData(){
    let copy_data = [...todo_data]
    copy_data.unshift(todo_input_data)
    setTodo_data(copy_data)
    localStorage.setItem('todo_list',JSON.stringify(copy_data))
  }
  useEffect(()=>{
   let data = localStorage.getItem('todo_list')
   if(data){
    setTodo_data(JSON.parse(data))    
   }
  },[])
  return(
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

          <input onKeyDown={(e)=>{
            if(e.key === 'Enter'){
              pushData()
            }
          }} onChange={(e)=>{
            setTodo_input_data(e.target.value)
          }} placeholder='오늘 할 일' type="text" /> 
          
          <button onClick={()=>{
            pushData()
          }} className='write_btn'> + </button>
        </div>
      </main>
  )
}

export default Main