import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Product from './page/Product'
import ProductDetails from './page/ProductDetails'
import Layout from './component/Layout'
import Home from './page/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path='*' element = {<h2>404 - Page Not Found</h2>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
