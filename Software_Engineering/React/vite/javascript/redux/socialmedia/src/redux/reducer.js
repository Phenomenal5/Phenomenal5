import { ADD_POST , LIKE_POST , ADD_COMMENT , DISLIKE_POST , FETCH_POST_SUCCESS , FETCH_POST_REQUEST , FETCH_POST_FAILED} from "./actions"



// Step 1 : Define a initial state.

const initialState = {
    posts : [],
    users : [],
    loading : false,
    error : ''
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            return {
                ...state,
                posts : [...state.posts, {id : Date.now() , content : action.payload.content , likes : 0 , dislikes: 0, comments : [] , image: action.payload.image || null , createdAt: new Date().toISOString()}]
            }

        case LIKE_POST:
        return {
            ...state,
            posts : state.posts.map((post) => post.id === action.payload ? {...post, likes: post.likes + 1} : post)
        }

        case DISLIKE_POST:
            return {
                ...state,
                posts : state.posts.map((post) => post.id === action.payload ? {...post, dislikes: post.dislikes + 1} : post)
            }

        case ADD_COMMENT:
            return {
                ...state,
                posts : state.posts.map((post) => post.id === action.payload.postId ? {...post, comments : [...post.comments, action.payload.comment]} : post)
            }

            case FETCH_POST_REQUEST: 
                return {
                    ...state,
                    loading : true
                }
            case FETCH_POST_SUCCESS:
                return {
                    ...state,
                    post : action.payload,
                    loading : false
                }
            case FETCH_POST_FAILED:
                return {
                    ...state,
                    error : action.payload 
                }

        default:
            return state;
    }
}