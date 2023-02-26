import { useState } from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  const [home,setHome] = useState(true);
  const [login,setLogin] = useState(false);
    if (home) {
    return (  <div className='App'>
      <div className='App-header'>
      <button  className="btn-outline-secondary btn-sm m-2" onClick={()=> {setHome(true); setLogin(false)}}>Home</button>
      <button className='btn-outline-secondary btn-sm m-2' onClick={()=> {setHome(false); setLogin(false)}}>About</button> 
      <button className='btn-outline-secondary btn-sm m-2 ' onClick={()=> {setHome(true); setLogin(true)}}>Login</button>     
       </div>
       <Home isLogin={login}/>
       </div>);
    } else {
      return (<div className='App'>
              <div className='App-header'>
        <button  className="btn-outline-secondary btn-sm m-2" onClick={()=> {setHome(true); setLogin(false)}}>Home</button>
        <button className='btn-outline-secondary btn-sm m-2' onClick={()=> {setHome(false); setLogin(false)}}>About</button>
        <button className='btn-outline-secondary btn-sm m-2' onClick={()=> {setHome(true); setLogin(true)}}>Login</button>
        </div>
         <About/>
      </div>);
     
    }
   
    
  
}

export default App;
