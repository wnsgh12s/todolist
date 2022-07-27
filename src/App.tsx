import Main from './component/Main';
import Header from './component/Header';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Tomorrow from './component/Tomorrow';

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
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main today={today} today_date = {today_date} today_day = {today_day} today_month = {today_month} today_year = {today_year} days={days} />}></Route>
        <Route path='/tomorrow' element={<Tomorrow today={today} today_date = {today_date} today_day = {today_day} today_month = {today_month} today_year = {today_year} days={days}/>}></Route>
      </Routes>
    </div>  
  );  
}

export default App;
