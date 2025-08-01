import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
    <div className='h-screen w-full duration-200' style = {{backgroundColor: color}} >
      <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadown-lg' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadown-lg' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadown-lg' style={{backgroundColor: "gray"}}>Gray</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadown-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadown-lg' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-white shadown-lg' style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => setColor("black")}className='outline-none px-4 py-1 rounded-full text-white shadown-lg' style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>
    </div>
              
    </>
  )
}

export default App
