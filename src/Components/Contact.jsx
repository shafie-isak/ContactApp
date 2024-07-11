import React, { useState, useRef, useEffect } from "react";
import '../CssModule/Contact.css';
import { Link } from "react-router-dom";

const Contact = (props) => {
  const { contactList = [], setContactList, setSelectedContact } = props; // Add setSelectedContact here
  const [showDelete, setShowDelete] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const containerRef = useRef(null);

  const handleThreeDotClick = (contactID) => {
    setActiveContact(contactID);
    setShowDelete(true);
  };

  useEffect(() => {
    console.log('Contact Component - contactList:', contactList);
  });

  const handleDeleteContact = (contactID) => {
    const deletedContact = contactList.filter((contact) => contact.contactID !== contactID);
    setContactList(deletedContact);
    setShowDelete(false);
  }

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowDelete(false);
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
      {contactList.map((contact) => (
        <div key={contact.contactID} > {/* Set selected contact on click */}
          <div className="Contact">
            <div className="info" onClick={() => setSelectedContact(contact)}>
              <div className="img-Container">
                <img src={contact.img} alt="" />
              </div>
              <div className="Name-Container">
                <input type="text" value={contact.Name} readOnly />
                <p>{contact.Phone}</p>
              </div>
            </div>
            <div className="three-dot-container" onClick={() => handleThreeDotClick(contact.contactID)}>
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
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Contact;
