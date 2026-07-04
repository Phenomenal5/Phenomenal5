import { API } from "../../services/api";


export const fetchTasks = async () => {
    const { data } = await API.get("/task")
    return data
}