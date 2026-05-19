import React, { useState } from 'react'
import { Heart } from 'lucide-react'

const BlogCard = (props) => {
    const [color, setColor] = useState('black')

    const handleLike = () => {
        let like = color === 'black' ? setColor('red') : setColor('black')
        return like;
    }
    return (
        <div className="border p-10 rounded-2xl my-5">
            <div className="flex items-center justify-between my-4">
                <h1 className="text-3xl font-bold">Title: {props.blog.title}</h1>
                <p className="text-2xl font-bold">Category: {props.blog.category}</p>
            </div>

            <p className="text-xl">Content: {props.blog.summary}</p>
            <p className="text-xl font-bold my-6">Date: {props.blog.updated_at}</p>
            <Heart onClick={handleLike} style={{color: color, fill: color}}/>
        </div>
    );
};

export default BlogCard