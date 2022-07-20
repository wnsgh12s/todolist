function Header():JSX.Element{
  return(
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
  )
}

export default Header