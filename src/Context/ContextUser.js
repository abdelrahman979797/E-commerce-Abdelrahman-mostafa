import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

export let UserContext = createContext()
export function UserContextProvider({ children }) {



    
    let [userData, setUserData] = useState(null)
    // if (userData != null) { setUserData(jwtDecode(userData)) }
    return <UserContext.Provider value={{ userData, setUserData }} >
        {children}
    </UserContext.Provider>



}