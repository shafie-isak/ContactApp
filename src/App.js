import React, { useEffect, useState } from "react";
import './App.css';
import Navigation from './Components/Navigation';
import Contacts from './Components/Contacts';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from "./Components/ContactForm";
import ContactsDetails from "./Components/Contact-details";
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [contactList, setContactList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsCollection = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsCollection);
        const contactsList = contactsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setContactList(contactsList);
      } catch (error) {
        alert(`Error fetching contacts: ${error.message}`);
      }
    };
    fetchContacts();
  }, []);

  const handleShowForm = () => setShowForm(!showForm);
  const handleshowNav = () => setShowNav(!showNav);

  const addContact = async (newContact) => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), newContact);
      setContactList([...contactList, { ...newContact, id: docRef.id }]);
    } catch (error) {
      alert(`Error adding contact: ${error.message}`);
    }
  };

  const updateContact = async (updatedContact) => {
    try {
      const contactRef = doc(db, "contacts", updatedContact.id);
      await updateDoc(contactRef, updatedContact);
      setContactList(contactList.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
      setSelectedContact(updatedContact);
    } catch (error) {
      alert(`Error updating contact: ${error.message}`);
    }
  };

  const deleteContact = async (contactId) => {
    try {
      const contactRef = doc(db, "contacts", contactId);
      await deleteDoc(contactRef);
      setContactList(contactList.filter(contact => contact.id !== contactId));
    } catch (error) {
      alert(`Error deleting contact: ${error.message}`);
    }
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
          <Contacts contactList={contactList} setContactList={setContactList} setSelectedContact={setSelectedContact} deleteContact={deleteContact} />
          <ContactsDetails selectedContact={selectedContact} updateContact={updateContact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
