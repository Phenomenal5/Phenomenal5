import { useDispatch } from "react-redux"
import { useState } from "react";
import { Share } from "lucide-react";
import { addPost } from "../redux/action";


const AddPost = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    dispatch(addPost(content, image))
    setContent("")
  }

  return (
    <div className="border border-gray-300 p-6 w-2/3 mx-auto">
      <div className="flex flex-col items-center gap-6">
      <h1>Add Post</h1>
        <textarea
          placeholder="What's on your mind ?"
          className="border border-gray-300 outline-0 rounded-md p-2"
          cols={60}
          value={content}
          onChange={(e)=> setContent(e.target.value)}
        ></textarea>
        <input type="file" accept="image/*" />
        <button
          onClick={handleAddPost}
          className="bg-black text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-4"
        >
          <span>Share</span>
          <Share />
        </button>
      </div>
    </div>
  )
}

export default AddPost