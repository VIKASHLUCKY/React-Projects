import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgcolor, setbgColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: bgcolor }}
    >

      <div className='fixed flex flex-wrap justify-center bottom-5 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick={() => setbgColor("red")} className='outline-none px-4 py-1 rounded-full text-ehite shadow-sm '
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button onClick={() => setbgColor("green")} className='outline-none px-4 py-1 rounded-full text-ehite shadow-sm '
            style={{ backgroundColor: "green" }}
          >Green</button>

          <button onClick={() => setbgColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm '
            style={{ backgroundColor: "white" }}
          >White</button>

          <button onClick={() => setbgColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm '
            style={{ backgroundColor: "black" }}
          >Black</button>

          <button onClick={() => setbgColor("yellow")} className='outline-none px-4 py-1 rounded-full text-ehite shadow-sm '
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>

          <button onClick={() => setbgColor("gray")} className='outline-none px-4 py-1 rounded-full text-ehite shadow-sm '
            style={{ backgroundColor: "gray" }}
          >Gray</button>

          <button onClick={() => setbgColor("blue")} className='outline-none px-4 py-1 rounded-full text-ehite shadow-sm '
            style={{ backgroundColor: "blue" }}
          >Blue</button>

        </div>

      </div>
    </div>
  )
}

export default App
