import { useEffect } from 'react'
import { createContext , useContext , useState } from 'react'
import API from '../api/api'




const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const login = async (credentials) => {
        const { token, user } = credentials
        localStorage.setItem("token", token)
        setUser(credentials)
    }


    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    const getUserProfile = async () => {
        const token = localStorage.getItem("token")
        setLoading(true)
        try {
            const response = await API.get("/users/me", { headers: { Authorization: `Bearer ${token}` } } )
            if (response.status === 200) {
                setLoading(false)
                setUser(response.data)
            }
        } catch (error) {
            console.error("Error fetching user profile:", error)
        } finally {
            setLoading(false)
        }
    }
    

    useEffect(() => {
        getUserProfile()
    }, [])


    return (
        <AuthContext.Provider value={{user, login, logout, loading, setLoading, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)