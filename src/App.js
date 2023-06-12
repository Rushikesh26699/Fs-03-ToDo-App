import React,{useState} from 'react'
import './App.css';
import OutputBox from './Components/OutputBox';
import InputBox from './Components/InputBox';

function App() {
const[currList,setCurrList]=useState([]);
const [currValue,setCurrValue]=useState('');
  return (
    <div className="App">
      <h1>TO_DO_APP</h1>
      <InputBox currList={currList} setCurrList={setCurrList} currValue={currValue} setCurrValue={setCurrValue}/>
      <OutputBox currList={currList} setCurrList={setCurrList} currValue={currValue} setCurrValue={setCurrValue}/>

    </div>
  
  );
}

export default App;
