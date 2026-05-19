import './App.css'
import Toggle from './component/Toggle';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
const [isOn, toggle] = Toggle()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/About' element = {<About />}/>
          <Route path = '/Contact' element = {<Contact />}/>
        </Routes>
      </BrowserRouter>

      {/*<div className='App'>
        <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
      </div>*/}
    </>
    

  )
}

export default App;