import React, { useState, useEffect } from "react";
import '../CssModule/ContactDetails.css';

// ContactsDetails component to show and edit details of selected contact
const ContactsDetails = ({ selectedContact, updateContact }) => {
  const [formState, setFormState] = useState({ ...selectedContact });

  useEffect(() => {
    setFormState({ ...selectedContact });
  }, [selectedContact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    updateContact({ ...formState, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState(prevState => ({ ...prevState, img: reader.result }));
        updateContact({ ...formState, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!selectedContact) {
    return (
      <div className="Contacts-details-Container">
        <p>Select a contact to see details</p>
      </div>
    );
  }

  return (
    <div className="Contacts-details-Container">
      <div className="Contacts-details">
        <div className="Contact-details-header">
          <img src={formState.img} alt="" />
          <label htmlFor="Upload-img"><i className="fa-solid fa-camera-rotate"></i></label>
          <input type="file" accept='image/*' id='Upload-img' onChange={handleImageChange} />
          <input type='text' name="Name" value={formState.Name} onChange={handleInputChange} />
        </div>
        <hr />
        <div className="Contact-Additional-Details">
          <div>
            <label htmlFor="Phone"><i className="fa-solid fa-phone"></i> Phone: </label>
            <input type='text' name="Phone" value={formState.Phone} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="Email"><i className="fa-solid fa-envelope"></i> Email: </label>
            <input type='text' name="Email" value={formState.Email || ""} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="Address"><i className="fa-solid fa-location-dot"></i> Address: </label>
            <input type='text' name="Address" value={formState.Address || ""} onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsDetails;
