import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Customercare from '../component/Customercare'
import NewArrival from '../component/NewArrival'
import Layout from '../component/Layout'

const Homepage = () => {
  return (
    <div>
      <Layout>
        <NewArrival />
        <Customercare />
      </Layout>
    </div>
  )
}

export default Homepage