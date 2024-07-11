import React, { useEffect, useState } from "react";
import './App.css';
import Navigation from './Components/Navigation';
import Contacts from './Components/Contacts';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from "./Components/ContactForm";
import ContactsDetails from "./Components/Contact-details";

function App() {
  // State to manage the list of contacts
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
  const [showForm, setShowForm] = useState(false); // State to toggle the visibility of the contact form
  const [selectedContact, setSelectedContact] = useState(null); // State to store the selected contact for detailed view
  const [showNav, setShowNav] = useState(false); // State to toggle the visibility of the navigation

  // Effect to initialize contact list from local storage on mount
  useEffect(() => {
    const storedContacts = localStorage.getItem('contactList');
    if (storedContacts) {
      setContactList(JSON.parse(storedContacts));
    } else {
      localStorage.setItem('contactList', JSON.stringify([]));
    }
  }, []);

  // Effect to update local storage whenever the contact list changes
  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contactList));
  }, [contactList]);

  // Function to toggle the contact form visibility
  const handleShowForm = () => setShowForm(!showForm);

  // Function to toggle the navigation visibility
  const handleshowNav = () => setShowNav(!showNav);

  // Function to add a new contact to the list
  const addContact = (newContact) => setContactList([...contactList, newContact]);

  // Function to update an existing contact in the list
  const updateContact = (updatedContact) => {
    setContactList(contactList.map(contact => contact.contactID === updatedContact.contactID ? updatedContact : contact));
    setSelectedContact(updatedContact);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <i className="fa-solid fa-bars btn-menu" onClick={handleshowNav}></i>
          <h1>Contacts</h1>
          <button className="Add-Contact-btn" onClick={handleShowForm}>
            <i className='fa-solid fa-plus'></i>
          </button>
          {showForm && <ContactForm close={handleShowForm} addContact={addContact} />}
        </header>
        <div className='Container'>
          <Navigation showNav={showNav} contactCount={contactList.length} handleshowNav={handleshowNav} />
          <Contacts contactList={contactList} setContactList={setContactList} setSelectedContact={setSelectedContact} />
          <ContactsDetails selectedContact={selectedContact} updateContact={updateContact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
