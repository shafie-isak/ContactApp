import React from 'react'
import '../CssModule/ContactsInfo.css'
import img from "../images/20220610181618_IMG_0982_resized.JPG"
function ContactsInfo() {
    return (
        <div className="Contacts-details" >
            <div className="Contacts-details">
              <div className="Contact-details-header">
                  <img src={selectedContact.img} alt="" />
                  <label htmlFor="Upload-img"><i class="fa-solid fa-camera-rotate"></i></label>
                  <input type="file" accept='image/*' id='Upload-img'/>
                  <input type='text' value={selectedContact.Name} />
              </div>
              <hr />
              <div className="Contact-Additional-Details">
                <div>
                  <label htmlFor="Phone"><i className="fa-solid fa-phone"></i> Phone: </label>
                  <input type='text' value={selectedContact.Phone} />
                </div>
                <div>
                  <label htmlFor="Email"><i className="fa-solid fa-envelope"></i> Email: </label>
                  <input type='text' value={selectedContact.Email || "N/A"} />
                </div>
                <div>
                  <label htmlFor="Address"><i className="fa-solid fa-location-dot"></i> Address: </label>
                  <input type='text' value={selectedContact.Address} />
                </div>
              </div>
            </div>
           </div>
    )
}

export default ContactsInfo
