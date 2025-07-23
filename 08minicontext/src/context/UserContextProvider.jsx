import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider= ({children}) => {                   //children is the generic name for the components and these children will have the access of all the value provided by the context provider
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value = {{user,setUser}}>
        {children}                     
        </UserContext.Provider>
    )
}

export default UserContextProvider