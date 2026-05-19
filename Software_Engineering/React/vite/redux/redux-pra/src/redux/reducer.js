import { ADD_COMMENT, ADD_POST, DISLIKE_POST, LIKE_POST } from "./action"



const initialState = {
    posts : [],
    users : []
}

export const postReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts : [...state.posts, {id: Date.now(), content: action.payload, likes: 0, comments: [], image: action.payload.image || null, dislikes: 0, createdAt: new Date().toISOString()}]
            }
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload ? {...post, likes: post.likes + 1} : post
                )
            }
        case DISLIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload ? {...post, dislikes: post.dislikes + 1} : post
                )
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.postId ? {...post, comments: [...post.comments, action.payload.comment]} : post
                )
            }
        default:
            return state;
    }
}