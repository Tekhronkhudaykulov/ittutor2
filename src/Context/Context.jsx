import { createContext, useEffect, useState } from "react";

export const Context  = createContext()
export  const ContextProvider = ({children}) => {
    let parses = window.localStorage.getItem("color")
    const [dark, setDark] = useState(!true)
    useEffect(() => {
        if(dark !== false){
            window.localStorage.setItem("color" , dark)
        }else{
            window.localStorage.removeItem("color")
        }
    }, [dark])
    const tokenLocals  = window.localStorage.getItem("tokenLocals")
    const [token, setToken] = useState(tokenLocals ? tokenLocals: null)
    useEffect(() => {
        if(token){
            window.localStorage.setItem("tokenLocals", token)
        }
    },[token])
    return(
        <Context.Provider value={{dark, setDark, token, setToken}}>
            {children}
        </Context.Provider>
    )
}