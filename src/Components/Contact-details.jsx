import React from "react";
import '../App.css';
import { Outlet } from "react-router-dom";

const ContactsDetails = ({ selectedContact }) => {
  if (!selectedContact) {
    return (
      <div className="Contacts-details-Container">
        <p>Select a contact to see details</p>
      </div>
    );
  }

  return (
    <div className="Contacts-details-Container">
      <Outlet />
    </div>
  );
}

export default ContactsDetails;
