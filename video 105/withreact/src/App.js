import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  //this is the usestate hook it is used for change value of a variable without using dom manipulation
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <Navbar logoText="Praveen"/>
      <div className='value' >{value}</div>
      <button onClick={()=>{setValue(value+1)}}>click me </button>
      <Footer/>
    </div>
  );
}

export default App;
