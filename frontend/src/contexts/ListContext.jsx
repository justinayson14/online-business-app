import { createContext, useState, useContext } from "react";

const ListContext = createContext()

export const useListContext = () => useContext(ListContext)

export const ListProvider = ({children}) => {
    const [status, setStatus] = useState(null)

    const login = (username, password) => {
        if (username === 'admin' && password === 'adminpass')
            setStatus('admin')
        else if (username === 'guest' && password === 'guestpass')
            setStatus('guest')
        else
            setStatus('invalid')
    }

    const logout = () => {
        setStatus(null)
    }

    const value = {
        status,
        login,
        logout
    }

    return (
        <ListContext.Provider value={value}>
        {children}
        </ListContext.Provider> 
    )
}