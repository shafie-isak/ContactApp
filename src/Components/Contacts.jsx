import React from 'react';
import '../CssModule/Contacts.css';
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import History from "./HIstory";
import Groups from "./GRoups";
import MyContacts from "./MyContacts";

const Contacts = (props) => {
  const { contactList, setContactList, setSelectedContact } = props;

  return (
    <div className="Contacts">
      <div className="Search-Contact-container">
        <div className="Search-Contact">
          <input type="text" placeholder="Search Contact..." className="Search-input" />
          <button className="btn-Search"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <hr />
      <div>
        <Routes>
          <Route element={<MyContacts />}>
            <Route path='/' element={<Contact contactList={contactList} setContactList={setContactList} setSelectedContact={setSelectedContact} />} />
            <Route path='/history' element={<History />} />
            <Route path='/groups' element={<Groups />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Contacts;
