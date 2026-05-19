export const ADD_POST = 'ADD_POST'
export const LIKE_POST = 'LIKE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DISLIKE_POST = 'DISLIKE_POST'



export const addPost = (content) => ({type: ADD_POST, payload: content})
export const likePost = (postId) => ({type: LIKE_POST, payload: postId})
export const addComment = (postId, comment) => ({type: ADD_COMMENT, payload: {postId, comment}})
export const dislikePost = (postId) => ({type: DISLIKE_POST, payload: postId})