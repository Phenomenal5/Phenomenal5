import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movielist from './components/Movielist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Movielist />
    </>
  )
}

export default App
