import React from 'react'
import {blogsPost} from '../data'
import BlogCard from './BlogCard'

const BlogsList = () => {


  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>All Blogs :</h1>
        {blogsPost.map(blog => (
            <BlogCard blog = {blog}/>
        ))}
    </div>
  )
}

export default BlogsList