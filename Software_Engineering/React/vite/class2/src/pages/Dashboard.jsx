import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = (props) => {
    const navigate = useNavigate();
    useEffect(
        () => {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
            if(!isLoggedIn) {
                navigate('/login')
            }
        }, []
    )
    return (
        <div>
            <h1>Hi {props.name}, Welcome to your Dashboard</h1>
            <p><em>You are logged in...</em></p>
        </div>
    )
}

export default Dashboard