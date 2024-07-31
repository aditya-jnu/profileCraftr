import React, { useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function Dashboard() {
    let{setUser, setUserName, userName, setUserEmail}=useContext(AppContext);
    const navigate=useNavigate();

    async function fetchUser() {
        try {
            const response = await fetch("http://localhost:5000/admin", {
                method: 'GET',
                credentials: 'include', // to send cookies with the request if needed
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("RESPONSE DATA", data);
            setUser(data.user._id);
            setUserName(data.user.displayName);
            setUserEmail(data.user.email)
            navigate(`/admin/${data.user._id}`);
        } catch (err) {
            console.log('Some error fetching user', err);
        }
    }
    useEffect(()=>{
        fetchUser();
    },[]);

    return (
        <div>
           loading......
        </div>
    )
}
