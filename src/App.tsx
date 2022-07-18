import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header">
        <div className="header-inner">
          <h1>Todolist</h1>
          <nav className="gnb">
            <ul>
              <li>오늘 할일</li>
              <li>내일 할일</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );  
}

export default App;
