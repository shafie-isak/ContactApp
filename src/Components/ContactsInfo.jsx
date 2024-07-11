import React, { useState, useEffect } from "react";
import '../CssModule/ContactDetails.css';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const ContactsInfo = ({ updateContact }) => {
  const { id } = useParams(); // Get the contact ID from the route parameters
  const [formState, setFormState] = useState({});
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const contactDoc = doc(db, 'contacts', id);
        const contactData = await getDoc(contactDoc);
        if (contactData.exists()) {
          setFormState(contactData.data());
        } else {
          alert('Contact not found');
        }
      } catch (error) {
        alert(`Error fetching contact: ${error.message}`);
      }
    };
    if (id) {
      fetchContact();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    updateContact({ ...formState, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState(prevState => ({ ...prevState, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    let imgUrl = formState.img;
    if (imageFile) {
      imgUrl = formState.img;
    }
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, { ...formState, img: imgUrl });
      alert('Contact updated successfully');
    } catch (error) {
      alert(`Error updating contact: ${error.message}`);
    }
  };

  return (
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
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default ContactsInfo;
