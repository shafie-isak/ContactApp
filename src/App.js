import React, { useState } from "react";
import './App.css';
import Navigation from './Components/Navigation';
import Contacts from './Components/Contacts';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from "./Components/ContactForm";
import ContactsDetails from "./Components/Contact-details";

function App() {
  const [contactList, setContactList] = useState([
    {
      contactID: Math.floor(Math.random() * 500000),
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      Name: "Shafie Isak Warsame",
      Phone: "+252614353583",
      Address: "Mogadishu, Somalia",
    },
    {
      contactID: Math.floor(Math.random() * 500000),
      img: "C:/Users/king Shafie/Pictures/Camera Roll/c8956c3320abdbd11fb3363852e40655.jpg",
      Name: "Shukri Isak Warsame",
      Phone: "+252612447992",
      Address: "Baydhabo, Somalia",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  function AddContact(newContact) {
    setContactList([...contactList, newContact]);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <i className="fa-solid fa-bars btn-menu"></i>
          <h1>Contacts</h1>
          <button className="Add-Contact-btn" onClick={handleShowForm} >
            <i class='fa-solid fa-Plus' />
          </button>
          {showForm && (
            <ContactForm close={handleShowForm} AddContact={AddContact} />
          )}
        </header>
        <div className='Container'>
          <Navigation contactCount={contactList.length} />
          <Contacts contactList={contactList} setSelectedContact={setSelectedContact} />
          <ContactsDetails selectedContact={selectedContact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
