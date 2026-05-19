import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_USERS_REQUEST"})
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            
        } catch (error) {
            
        }
    }
}