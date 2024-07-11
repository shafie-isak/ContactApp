import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import ContactDetailes from "./Contact-details"

const MyRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Contacts/>}/>
            <Route path="./ContactDetailes" element={<ContactDetailes/>}/>
        </Routes>
    )
}

export default MyRouter