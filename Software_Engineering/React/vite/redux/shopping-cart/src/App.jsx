import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Carts from './component/Carts'
import ProductsList from './component/ProductsList'

function App() {


  return (
    <Router>
          <Navbar />
          <Routes>
            <Route path='/shoppingCart' element = {<Carts />}/>
            <Route path='/' element = {<ProductsList />}/>
          </Routes>
      </Router>
  )
}

export default App
