import { ADD_COMMENT_TO_POST_SUCCESS, ADD_COMMENT_TO_POST_FAILED, FETCH_USERS_LIST, FETCH_USERS_LIST_SUCCESS, FETCH_USERS_LIST_FAILED, DISLIKE_POST, LIKE_POST, ADD_POST_FAILED, ADD_POST_SUCCESS, FETCH_POST_FAILED, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./action"



const initialState = {
    posts : [],
    users: [],
    loading : false,
    error : null
}

export const postReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_POST_REQUEST:
            return {...state, loading: true, error: null}
        case FETCH_POST_SUCCESS:
            return {...state, loading: false, posts: action.payload}
        case FETCH_POST_FAILED:
            return {...state, loading: false, error: action.payload}
        case ADD_POST_SUCCESS:
            return {...state, posts: [...state.posts, action.payload]}
        case ADD_POST_FAILED:
            return {...state, loading: false, error: action.payload}
        case ADD_COMMENT_TO_POST_SUCCESS:
            return {...state, loading: false, posts: action.payload}
        case ADD_COMMENT_TO_POST_FAILED:
            return {...state, loading: false, error: action.payload}
        case FETCH_USERS_LIST:
            return {...state, loading: true, error: null}
        case FETCH_USERS_LIST_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case FETCH_USERS_LIST_FAILED:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}