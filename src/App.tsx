import React, { useEffect, useState } from 'react';
import Main from './component/Main';
import Header from './component/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>  
  );  
}

export default App;
