import axios from "axios"
export const ADD_POST = 'ADD_POST'
export const LIKE_POST = 'LIKE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DISLIKE_POST = 'DISLIKE_POST'
export const FETCH_POST_REQUEST ='FETCH_POST_REQUEST' 
export const FETCH_POST_SUCCESS ='FETCH_POST_SUCCESS' 
export const FETCH_POST_FAILED ='FETCH_POST_FALIED' 

export const addPost = (content) => ({type : ADD_POST , payload : content})

export const likePost = (id) => ({type : LIKE_POST , payload : id})
export const addComment = (postId, comment) =>({type : ADD_COMMENT , payload : {postId, comment}})
export const dislikePost = (id) => ({type : DISLIKE_POST , payload : id})

export const fetchPost = () => {
    return async (dispatch) => {
        dispatch({type : FETCH_POST_REQUEST});

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({ type : FETCH_POST_SUCCESS , payload: response.data })
        } catch (error) {
            dispatch({ type: FETCH_POST_FAILED , payload: error.message })
        }
    }
}