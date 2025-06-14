import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter,setCounter] =useState(15)

  //let counter=10;
  const addValue=()=>{
    //counter++;
    //console.log("Counter value:", counter);
    if(counter<30){
      console.log( counter);
    setCounter(counter + 1)
    setCounter(counter+2)
    setCounter(counter+3)

    console.log(counter)
    }
  }
  const removeValue=()=>{
    if(counter>0){

    setCounter(counter-1);

    }
  }
  
  return (
    <>
      <h1>Counter app</h1>
      <h2>counter value:{counter}</h2>
      <br/>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
