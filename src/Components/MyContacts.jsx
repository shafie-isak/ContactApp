import React from 'react'
import { Outlet } from 'react-router-dom'

function MyContacts() {
    return (
        <div className="MyContacts" >
            <Outlet/>
        </div>  
    )
}

export default MyContacts
