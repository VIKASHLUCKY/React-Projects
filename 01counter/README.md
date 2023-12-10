# React + Vite

## Project Counter Increment & Dcrement In React 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
    // console.log("Clicked ", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Jaunpur Coder </h1>
      <h2>*** Counter Project ***</h2><hr></hr>
      <h3>Counter Value : {counter}</h3>

      <button onClick={addValue}>Increment Value</button>
      <button onClick={removeValue}>Dcrement  Value</button><hr></hr>

      <h1>{counter}</h1>
    </>
  )
}

export default App



```
