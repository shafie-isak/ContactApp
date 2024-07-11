import React, { useState } from 'react'
import "../CssModule/ContactForm.css"
import img from '../images/default-avatar-icon-of-social-media-user-vector.jpg'
const ContactForm = ({ close, AddContact }) => {
    const [formState, setFormState] = useState({
      Name: "",
      Phone: "",
      Email: "",
      Address: ""
    });
    const [imgPreview, setImgPreview] = useState("");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImgPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newContact = {
        ...formState,
        contactID: Math.floor(Math.random() * 500000),
        img: imgPreview
      };
      if (newContact.Phone) {
        AddContact(newContact);
        close();
      }
    };
    return (
        <div className="form-container">
            <div className="Overly">
                <div className="close" onClick={close}>
                    <i class="fa-solid fa-xmark btn-Cancel"></i>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className="Form-img-container">
                        <img src={imgPreview || img} className='img' alt="Preview" />
                        <label htmlFor="Upload-img"><i className="fa-solid fa-camera"></i></label>
                        <input type="file" accept='image/*' id='Upload-img' onChange={handleImageChange} />
                        <hr />
                    </div>
                    <div className='Row'>
                        <label htmlFor="Name"><i className="fa-solid fa-user"></i> Name:</label>
                        <input type="text" className='Name-input' name="Name" value={formState.Name} onChange={handleInputChange}  required placeholder='Name(optional)'/>
                    </div>
                    <div className='Row'>
                        <label htmlFor="Phone"><i class="fa-solid fa-phone"></i> Phone:</label>
                        <input type="number" name="Phone" value={formState.Phone} onChange={handleInputChange} required placeholder='Number(Required)'/>
                    </div>
                    <div className='Row'>
                        <label htmlFor="Email"><i class="fa-solid fa-envelope"></i> Email:</label>
                        <input type="text" name="Email" value={formState.Email} onChange={handleInputChange} placeholder='Email(optional)'/>
                    </div>
                    <div className='Row'>
                        <label htmlFor="Address"><i class="fa-solid fa-location-dot"></i> Address:</label>
                        <input type="text" name="Address" value={formState.Address} onChange={handleInputChange} placeholder='Address(optional)'/>
                    </div>
                    <div className='Form-btn-Container'>
                        <button className='btn-Reset'>Reset</button>
                        <button className='btn-Sumit' type='submit'>Submit</button>
                    </div>
            </form>
            </div>
        </div>
    )
}

export default ContactForm
