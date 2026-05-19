import { useDispatch } from "react-redux"
import { addPost } from "../redux/action";
import { useState } from "react";
import { Share } from "lucide-react";

const AddPost = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if(file){
      setImage(URL.createObjectURL(file))
    }
  }

  // Handle adding a new post
  const handleAddPost = () => {
    dispatch(addPost({content , image}))
  }

  return (
    <div className="border border-gray-300 p-6 w-2/3 mx-auto">
      <div className="flex flex-col items-center gap-6">
      <h1>Add Post</h1>
        <textarea
          placeholder="What's on your mind ?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-300 outline-0 rounded-md p-2"
          cols={60}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button
          onClick={() => handleAddPost(content)}
          className="bg-black text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-4"
        >
          <span>Share</span>
          <Share />
        </button>
        {image && (
          <div className="mt-4">
            <img src={image} alt="Post" width={100} className="w-full h-auto rounded-md" />
          </div>
        )}
      </div>
    </div>
  )
}

export default AddPost