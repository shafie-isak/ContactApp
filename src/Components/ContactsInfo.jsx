import React from 'react'
import '../App.css'
import img from "../images/20220610181618_IMG_0982_resized.JPG"
function ContactsInfo() {
    return (
        <div className="Contacts-details" >
            <div className="Contact-details-header">
              <img src={img} alt="" />
              <input type='text' value={"Shafie isak warsame"} />
            </div>
            <hr />
            <div className="Contact-Additional-Details">
                <div>
                  <label htmlFor="Phone"><i class="fa-solid fa-phone"></i> Phone: </label>
                  <input type='text' value={25261435583} />
                </div>
                <div>
                  <label htmlFor="Email"><i class="fa-solid fa-envelope"></i> Email: </label>
                  <input type='text' value={"Shafieiska@gmail.com"} />
                </div>
                <div>
                  <label htmlFor="Address"><i class="fa-solid fa-location-dot"></i> Address: </label>
                  <input type='text' value={"Dayniile,Mogadisho,Banadir"}/>
                </div>
            </div>
           </div>
    )
}

export default ContactsInfo
