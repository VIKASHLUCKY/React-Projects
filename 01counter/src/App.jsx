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

  // count down 10 in pop show
  if (counter === 10) {
    alert("Your Count Down 10 am Happy ...")
  }

  // count down -1 in pop show
  if (counter === -1) {
    alert("Your Count Down minus -1 so bad ..")
  }


  return (
    <>
      <div className='container'>
        <h1>Jaunpur Coder </h1>
        <h2>*** Counter Project ***</h2><hr></hr>
        <h3 id="value">Counter Value : {counter}</h3>

        <button id="btn" onClick={addValue}>Increment Value</button>
        <button id="btn" onClick={removeValue}>Dcrement  Value</button><hr></hr>

        <h1 id="value">{counter}</h1>
      </div>
    </>
  )
}

export default App
