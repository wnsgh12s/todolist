import { useState } from "react";
import { Link, useParams } from "react-router-dom";

interface TodayProps {
  today : Date;
  today_date : number;
  today_day : number;
  today_month : number;
  today_year :number;
  days :string[]
}

function Tomorrow({today,today_date,today_day,today_month,today_year,days}:TodayProps){
  let {id} = useParams()
  let [tomorrow_list,set_tommorrow_list] = useState(['몸만들기'])
  let last_day = [31,29,31,30,31,30,31,31,30,31,30,31]
  return(
    <main id="main">  
      <div className="main_inner">
        <h2>{today_year}년 {today_month}월 {today_date}일 {days[today_day]}</h2>
        <button>왼쪽</button>
        <button>오른쪾</button>
        <div className="calender">
          <ul className="day clear">  
            {days?.map((e,i)=>{
              let minus = today_day -i
              let day = today_day - minus <= 0 ? 31 : today_day - minus
              let month = today_day-minus <= 0 ? today_month - 1 : today_month
              let year = month <= 0 ? today_year-1 : today_year 
              return(
                <li className={ id && parseInt(id) === i ? 'active' : ''} onClick={(e)=>{
                }}> <Link to={`/tomorrow/${i}`}>{e} <br />{year}-{month}-{day}</Link></li>     
              )
            })}
          </ul>
        </div>
        <div className="tomorrow_list">
            <ul>
              <li>{id && tomorrow_list[parseInt(id)]}</li>
            </ul>
            <input className="tmr_input" type="text" /><button className="write_btn">+</button>
          </div>
      </div>
    </main>
  )
}

export default Tomorrow