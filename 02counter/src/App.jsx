import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1);
    if(counter >= 20){
      setCounter(counter)
    }
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
    if(counter<=0){
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Remove Value</button>
      <div>Footer: {counter}</div>
    </>
  )
}

export default App
