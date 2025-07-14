import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    fullname: "Vishad Srivastava",
    age: "19"
  }
  let myArr = [1,2,3]

  return (
    <>
      <h1 className='text-amber-400 bg-gray-900'>Vishad</h1>
      <Card channel="VishadSrivastava" btnText = "ClickMe" />
      <Card channel="jod"/>
    </>
  )
}

export default App
