import { Heart, ThumbsDown } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostRequest } from "../redux/action";
import { addCommentToPost } from '../redux/action';
import { useEffect, useState } from 'react';


const PostList = () => {
  const [commentValue, setCommentValue] = useState({})
  const {posts, loading, error} = useSelector(state => state)
  const dispatch = useDispatch()

  const timeAgo = (timestamp)=>{
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000)
    if (seconds < 60) return 'Just now'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    const days = Math.floor(hours / 24)
    if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`
    const months = Math.floor(days / 30)
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`
    const years = Math.floor(months / 12)
    return `${years} year${years > 1 ? 's' : ''} ago`
  }

  const handleAddComment = (id, comment) => {
    const commentText = commentValue[id]
    dispatch(addCommentToPost(id, {[id]: commentText}))
    console.log(id)
  }

  useEffect(()=>{
    dispatch(fetchPostRequest())
  },[])  

  console.log(posts);

  
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col justify-between gap-16 items-start border my-4 border-gray-300 p-6 w-full rounded-2xl"
        >
          <div className='flex items-center justify-between w-full'>
            <p className="text-xl font-semibold">{post.content}</p>
            {post.image && <img src={post.image} width={200} alt="Post" className='w-20 h-20 object-cover rounded-md' />}
            <div>{timeAgo(post.createdAt)}</div>
            <button
              className="flex gap-x-2 bg-black text-white px-2 py-2 rounded-full cursor-pointer"
            >
              {post.likes}
              <Heart />
            </button>
            <button
              className="flex gap-x-2 bg-black text-white px-2 py-2 rounded-full cursor-pointer"
            >
              {post.dislikes}
              <ThumbsDown />
            </button>
          </div>
          
          <div className='flex flex-col items-start gap-2 py-1 m-0'>
            <input type="text" placeholder="Add a comment..." className='border border-gray-300 w-60 px-2 outline-0 py-1' value={commentValue[post.id]} onChange={(e) => setCommentValue({ ...commentValue, [post.id]: e.target.value })} />
            <button className='bg-black text-white px-4 py-2 rounded-md cursor-pointer gap-2' onClick={()=> handleAddComment(post.id)}>Comment</button>
          </div>
          <div className='border-b'>
            {
              post.comments.map((comment, index) => (
                <div key={index} className='text-gray-400 font-semibold capitalize border-b border-b-gray-300 py-2'>
                  {comment[post.id]}
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList