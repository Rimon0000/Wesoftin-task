import { createContext, useEffect, useState } from "react";


export const SharedContext = createContext(null)

const ContextProvider = ({children}) => {

    //loading data
    const [users, setUsers] = useState([])
    useEffect(() =>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    const sharedInfo = {
        users
    }

    return (
        <SharedContext.Provider value={sharedInfo}>
            {children}
        </SharedContext.Provider>
    );
};

export default ContextProvider;