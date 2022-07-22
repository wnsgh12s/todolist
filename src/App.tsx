import Main from './component/Main';
import Header from './component/Header';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Tomorrow from './component/Tomorrow';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/tomorrow' element={<Tomorrow/>}></Route>
      </Routes>
    </div>  
  );  
}

export default App;
