import React from 'react';
import '../../assets/styles/homepart/contact.css';
import '../../assets/styles/homepart/common.css';

import contactIcoF        from '../../assets/images/homeimages/contact-ico-f.png';
import contactIcoIn       from '../../assets/images/homeimages/contact-ico-in.png';
import contactIcoG        from '../../assets/images/homeimages/contact-ico-g.png';
import contactIcoT        from '../../assets/images/homeimages/contact-ico-t.png';
import arrowDownImg       from '../../assets/images/homeimages/arrow-down.png';

const Contact = () => {
    return (
      <div className="contact">
         <div className="contact-content subpart-content">
            <div className="contact-part left-info">
               <div className="title">Contact us</div>
               <div className="contact-lists">
                  <div className="contact-row">
                     <div className="contact-item contact-left-item">
                        <div className="info-title">Address</div>
                        <div className="info-detail">565 Broadhollow Rd, Farmingdale, NY 11735, United States</div>
                     </div>
                     <div className="contact-item contact-right-item">
                        <div className="info-title">Social media</div>
                        <div className="info-detail">
                           <img src={contactIcoF}></img>
                           <img src={contactIcoIn}></img>
                           <img src={contactIcoG}></img>
                           <img src={contactIcoT}></img>
                        </div>
                     </div>
                  </div>
                  <div className="contact-row">
                     <div className="contact-item contact-left-item">
                        <div className="info-title">Email</div>
                        <div className="info-detail">mail.address@info.com</div>
                     </div>
                     <div className="contact-item contact-right-item">
                        <div className="info-title">Phone</div>
                        <div className="info-detail">+91 839 293 6565</div>
                     </div>
                  </div>
                  <div className="map-notice">
                     <div className="map-string"> We are on the map </div>
                     <div className="down-img"><img src={arrowDownImg}></img></div>
                  </div>
               </div>
            </div>
            <div className="contact-part right-touch">
               <div className="title">Get in touch</div>
               <div className="touch-row col-2">
                  <input type="text" placeholder="Name*"></input>
                  <input type="text" placeholder="Email*"></input>
               </div>
               <div className="touch-row col-2">
                  <input type="text" placeholder="Phone on Skype*"></input>
                  <input type="text" placeholder="Subject*"></input>
               </div>
               <div className="touch-row col-1">
                  <input type="text" placeholder="Message*"></input>
               </div>
               <div className="touch-submit">
                  <button>Submit</button>
               </div>
               <div className="map-notice">
                  <div className="map-string"> We are on the map </div>
                  <div className="down-img"><img src={arrowDownImg}></img></div>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Contact;