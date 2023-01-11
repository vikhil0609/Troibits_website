import React from 'react';
import '../../assets/styles/homepart/footer.css';
 
import logoImg from '../../assets/images/logo.png';
import footerLogo from "../../assets/images/media_library/Group-1190.png"
 
const Footer = () => {
    return (
      <div className="footer-wrap">
         <div className="footer">
            <div>
            <img className="footer-logo" src={logoImg} />
            <img className="footer-logo2" src={footerLogo} />
            </div>
             <div className="footer-content">
               <div className="footer-item infoTech">
                     2021 Trobits infotech private limited
               </div>
               <div className="footer-item">
               Home
               </div>
               <div className="footer-item">
                  Services
               </div>
               <div className="footer-item">
                  Company
               </div>
               <div className="footer-item">
                  Work
               </div>
               <div className="footer-item">
                  Contact
               </div>
            </div>
         </div>
         <div className="footer-bottom">
            <div className="footer-text">
               Sitemap
            </div>
            <div className="footer-text">
               Terms Of Use
            </div>
            <div className="footer-text">
               Privacy Policy
            </div>
            <div className='footer-bottom-copyright'>
               &copy;2022 Troibits Infotech Private Limited -
               <div>All rights Reserved</div>
            </div>
         </div>
      </div>

    );
}

export default Footer;
