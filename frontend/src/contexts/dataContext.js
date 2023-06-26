import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const DataContext = createContext({})

export function DataProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)
    const [updateAppointmentID, setUpdateAppointmentID] = useState(null)
    const [appointmentData, setAppointmentData] = useState(null)

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
                updateAppointmentID, 
                setUpdateAppointmentID,
                appointmentData, 
                setAppointmentData,
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