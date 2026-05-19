import { useState } from 'react'
import AddPost from './components/AddPost'
import PostList from './components/PostList'
import Layout from './components/Layout'

function App() {


  return (
    <Layout>
      <AddPost />
      <PostList />
    </Layout>
  )
}

export default App
