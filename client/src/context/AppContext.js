import { createContext,useState } from "react";

export const AppContext=createContext();
export default function AppContextProvider({children}){
    const[user,setUser]=useState(null);
    const[userName,setUserName]=useState(null);
    const[userEmail, setUserEmail]=useState(null);
    console.log("Active user is ",user ,userName);
    let value={user, setUser, userName, setUserName, setUserEmail, userEmail};

    return(
        <AppContext.Provider value={value}>
            {children}
         </AppContext.Provider>
    )
}