import { useEffect, useRef, useState } from "react";

interface TodayProps {
  today : Date;
  today_date : number;
  today_day : number;
  today_month : number;
  today_year :number;
  days :string[]
}
function Tomorrow({today,today_date,today_day,today_month,today_year,days}:TodayProps){
  let [active,set_active] = useState(0)
  
  function changeActive(e:React.MouseEvent<HTMLLIElement,MouseEvent>,id:number){
    set_active(id)
  }
  return(
    <main id="main">
      <div className="main_inner">
        <h2>{today_year}년 {today_month}월 {today_date + 1}일 {days[today_day +1]}</h2>
        <div className="calender">
          <ul className="day clear">
            {days?.map((e,id)=>{
              return(
                <li className={active === id ? 'active' : 'notactive'} onClick={(e)=>{
                  changeActive(e,id)
                }}>{e}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Tomorrow