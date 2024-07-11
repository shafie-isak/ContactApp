import React, { useState, useRef, useEffect } from "react";
import '../CssModule/Contact.css';

const Contact = ({ contactList = [], setSelectedContact, deleteContact }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const containerRef = useRef(null);

  const handleThreeDotClick = (event, contactID) => {
    event.stopPropagation();
    setActiveContact(contactID);
    setShowDelete(true);
  };

  const handleDeleteContact = async (contactID) => {
    try {
      await deleteContact(contactID);
      setShowDelete(false);
    } catch (error) {
      alert(`Error deleting contact: ${error.message}`);
    }
  };

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
        <div key={contact.id} onClick={() => setSelectedContact(contact)} className="Contact">
          <div className="info">
            <div className="img-Container">
              <img src={contact.img} alt="" />
            </div>
            <div className="Name-Container">
              <input type="text" value={contact.Name} readOnly />
              <p>{contact.Phone}</p>
            </div>
          </div>
          <div className="three-dot-container" style={{ position: activeContact === contact.id ? "relative" : "static" }} onClick={(e) => handleThreeDotClick(e, contact.id)}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            {showDelete && activeContact === contact.id && (
              <div className="Delete-container">
                <button className="btn-Delete" onClick={() => handleDeleteContact(contact.id)}>
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
