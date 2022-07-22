import {Link} from 'react-router-dom'

function Header(){
  return(
    <header id="header">
        <div className="header_inner">
          <h1>Todolist</h1>
          <nav className="gnb">
            <ul>
              <li><Link to={'/'}> 오늘 할일</Link></li>
              <li><Link to={'/tomorrow'}> 내일 할일</Link></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header