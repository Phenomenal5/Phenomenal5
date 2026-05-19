import { useState } from 'react'
import AddPost from './componenets/AddPost'
import './App.css'
import Navbar from './componenets/Navbar'
import PostList from './componenets/PostList'
import Layout from './componenets/Layout'

function App() {

  return (
    <Layout>
      <AddPost />
      <PostList />
    </Layout>
  )
}

export default App
