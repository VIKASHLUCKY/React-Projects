import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "vikash",
    age: 25
  }

  let newArr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-5 mb-4'>Tailwind test</h1>
      <Card username="Lucky G" btntext="Click Me" />
      <Card username="Betu" />  // btntext="Touch Me"

    </>
  )
}

export default App
