import { useState } from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  const [home,setHome] = useState(true);

    if (home) {
    return (  <div className='App'>
      <button onClick={()=> setHome(false)}>About</button>
       <Home/>
       </div>);
    } else {
      return (<div className='App'>
        <button onClick={()=> setHome(true)}>Home</button>
         <About/>
      </div>);
     
    }
   
    
  
}

export default App;
