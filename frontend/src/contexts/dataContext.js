import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const DataContext = createContext({})

export function DataProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState()

    const handleLogout = async () => {
        localStorage.clear()
        toast('User logged out!')
    }

    useEffect(() => {
        const user = localStorage.getItem("userData")
        const login = localStorage.getItem("isLoggedIn")

        if (user && login) {
            setIsLoggedIn(login)
            setUserData(JSON.parse(user))
            console.log(userData);
        }
    }, [])

    return (
        <DataContext.Provider
            value={{
                isLoggedIn, 
                setIsLoggedIn,
                userData, 
                setUserData,
                handleLogout
            }}
        >
            {children}
        </DataContext.Provider>
    )
}