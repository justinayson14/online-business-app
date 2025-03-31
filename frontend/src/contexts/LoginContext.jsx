import { createContext, useState, useContext } from "react";

const LoginContext = createContext()

export const useLoginContext = () => useContext(LoginContext)

export const LoginProvider = ({children}) => {
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
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider> 
    )
}