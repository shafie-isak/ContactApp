import React from 'react'
import '../App.css';
import { Outlet } from 'react-router-dom'

function MyContacts() {
    return (
        <div className="MyContacts" >
            <Outlet/>
        </div>  
    )
}

export default MyContacts
