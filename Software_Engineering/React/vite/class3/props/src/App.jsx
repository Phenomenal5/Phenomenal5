import React, { useState } from 'react'
import Child from './Child'
import './App.css'

const App = () => {
  const [colorCode, setColorCode] = useState("#000000")


  return (
    <div className='p-1 ml-3'>
      <h1>color code: {colorCode}</h1>
      <input type="color" onChange={(e)=> setColorCode(e.target.value)}/>
      <div className='w-100 h-100 border border-black mt-2' style={{background: colorCode}}>
      </div>
    </div>
  )
}

export default App