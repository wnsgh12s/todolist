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
  let [active,set_active] = useState(today_day)
  let {id} = useParams()
  function changeActive(e:React.MouseEvent<HTMLLIElement,MouseEvent>,i:number){
    set_active(i)
  }

  let [tomorrow_list,set_tommorrow_list] = useState(['1번','2번','3번','4번','5번','6번','7번'])
  return(
    <main id="main">
      <div className="main_inner">
        <h2>{today_year}년 {today_month}월 {today_date}일 {days[today_day]}</h2>
        <div className="calender">
          <ul className="day clear">
            {days?.map((e,i)=>{
              return(
                <li className={active === i ? 'active' : ''} onClick={(e)=>{
                  changeActive(e,i)
                }}> <Link to={`/tomorrow/${i}`}>{e}</Link></li>
              )
            })}
          </ul>
        </div>
        <div className="tomorrow_list">
            <ul>
              <li>{id && tomorrow_list[parseInt(id)]}</li>
            </ul>
          </div>
      </div>
    </main>
  )
}

export default Tomorrow