import React, { useState } from 'react';
import '../CssModule/Contacts.css';
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import History from "./HIstory";
import Groups from "./GRoups";
import MyContacts from "./MyContacts";

const Contacts = ({ contactList, setSelectedContact, deleteContact }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contactList.filter(contact => 
    contact.Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    contact.Phone.includes(searchTerm)
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="Contacts">
      <div className="Search-Contact-container">
        <div className="Search-Contact">
          <input 
            type="text" 
            placeholder="Search Contact..." 
            className="Search-input" 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <button className="btn-Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <hr />
      <div className='scrollbar-container'>
        <Routes>
          <Route element={<MyContacts />}>
            <Route path='/' element={<Contact contactList={filteredContacts} setSelectedContact={setSelectedContact} deleteContact={deleteContact} />} />
            <Route path='/history' element={<History />} />
            <Route path='/groups' element={<Groups />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Contacts;
