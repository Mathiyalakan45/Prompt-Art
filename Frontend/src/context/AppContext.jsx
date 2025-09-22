import { createContext, use, useState } from "react";

export const Appcontext = createContext()

const AppcontextProvider = (props) =>{
    const [user,setUser] =useState(null) ;
    const [showlogin,setShowLogin] =useState(false) ;

    const value = {
        user,setUser,showlogin,setShowLogin
    } 

    return(
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default AppcontextProvider

  