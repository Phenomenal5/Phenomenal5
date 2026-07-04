import axios from "axios";
export const ADD_COMMENT_TO_POST_SUCCESS = "ADD_COMMENT_TO_POST_SUCCESS";
export const ADD_COMMENT_TO_POST_FAILED = "ADD_COMMENT_TO_POST_FAILED";
export const FETCH_POST_REQUEST = "FETCH-POST-REQUEST";
export const FETCH_POST_SUCCESS = "FETCH-POST-SUCCESS";
export const FETCH_POST_FAILED = "FETCH-POST-FAILED";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "ADD_POST_FAILED";
export const LIKE_POST = "LIKE_POST";
export const DISLIKE_POST = "DISLIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const FETCH_USERS_LIST = "FETCH_USERS_LIST";
export const FETCH_USERS_LIST_SUCCESS = "FETCH_USERS_LIST_SUCCESS";
export const FETCH_USERS_LIST_FAILED = "FETCH_USERS_LIST_FAILED";


export const likePost = (postId) => ({type: LIKE_POST , payload: postId})
export const dislikePost = (postId) => ({type: LIKE_POST , payload: postId})


export const addPost = (content, image) => {
    // Create a new post object
    const newPost = {
        content,
        image : image || null,
        likes: 0,
        dislikes: 0,
        comments: [],
        createdAt: new Date().toISOString()
    }


    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:3000/posts`, newPost)
            dispatch({ type: ADD_POST_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({ type: ADD_POST_FAILED, payload: error.message})
        }
    }
}


// Thunk action to fetch posts from the server
export const fetchPostRequest = () => {
    return async (dispatch) => {
        // Start the fetch post request
        dispatch({ type: FETCH_POST_REQUEST})
        try {
            // Make the API call to fetch posts
            const response = await axios.get('http://localhost:3000/posts')
            dispatch({type: FETCH_POST_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: FETCH_POST_FAILED, payload: error.message})
        }
    }
}


export const addCommentToPost = (postId, comment) => {
    // This action adds a comment to a specific post
    return async (dispatch) => {
        try {
            // Fetch the existing post to get its current comments
            const postResponse = await axios.get(`http://localhost:3000/posts/${postId}`)
            const post = postResponse.data;

            // Add the new comment to the existing comments array
            const response = await axios.patch(`http://localhost:3000/posts/${postId}`,{ comments: [...post.comments, comment] })
            dispatch({type: ADD_COMMENT_TO_POST_SUCCESS, payload: response.data})

        } catch (error) {
            dispatch({type: ADD_COMMENT_TO_POST_FAILED, payload: error.message})
        }
    }
}


export const fetchUsersList = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_USERS_LIST})
        try {
            const response = await axios.get('http://localhost:3000/users')
            dispatch({type: FETCH_USERS_LIST_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: FETCH_USERS_LIST_FAILED, payload: error.message})
        }
    }
}