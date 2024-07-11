import React, { useState, useRef, useEffect } from "react";
import '../CssModule/Contact.css';

// Contact component to display individual contacts
const Contact = ({ contactList = [], setContactList, setSelectedContact }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const containerRef = useRef(null);

  // Handle click on three dots to show delete button
  const handleThreeDotClick = (event, contactID) => {
    event.stopPropagation();
    setActiveContact(contactID);
    setShowDelete(true);
  };

  // Handle contact deletion
  const handleDeleteContact = (contactID) => {
    const updatedContacts = contactList.filter(contact => contact.contactID !== contactID);
    setContactList(updatedContacts);
    setShowDelete(false);
  };

  // Handle click outside to hide delete button
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowDelete(false);
      setActiveContact(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {contactList.map(contact => (
        <div key={contact.contactID} onClick={() => setSelectedContact(contact)} className="Contact">
          <div className="info">
            <div className="img-Container">
              <img src={contact.img} alt="" />
            </div>
            <div className="Name-Container">
              <input type="text" value={contact.Name} readOnly />
              <p>{contact.Phone}</p>
            </div>
          </div>
          <div className="three-dot-container" style={{ position: activeContact === contact.contactID ? "relative" : "static" }} onClick={(e) => handleThreeDotClick(e, contact.contactID)} >
            <i className="fa-solid fa-ellipsis-vertical"></i>
            {showDelete && activeContact === contact.contactID && (
              <div className="Delete-container">
                <button className="btn-Delete" onClick={() => handleDeleteContact(contact.contactID)}>
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contact;
