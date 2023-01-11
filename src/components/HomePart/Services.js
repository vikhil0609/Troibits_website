import React from 'react';
import '../../assets/styles/homepart/services.css';
import '../../assets/styles/homepart/common.css';


import Growth from "../../assets/images/media_library/growth-Marketing.png";
import Startup from '../../assets/images/AssetsTroibits/startup.PNG';
import enterprise from '../../assets/images/AssetsTroibits/enterprise.PNG';
import website from '../../assets/images/AssetsTroibits/website.PNG';
import mobile from '../../assets/images/AssetsTroibits/mobile.PNG';
import maintainance from '../../assets/images/AssetsTroibits/maintainance.PNG';
import nextgen from '../../assets/images/AssetsTroibits/NextGen.PNG';
import productdesign from '../../assets/images/AssetsTroibits/productDesign.PNG';


const Services = () => {
    return (

      <div className="services">
         <div className="content-wrap">
            <div className="services-content subpart-content">
               <div className="main-title">What we do?</div>
               <div className="main-description"><h6 style={{color:"white"}}>Your search for end-to-end technology partner ends here. 
               We are digitally <br />transforming businesses with our well designed, easy to use smart apps.</h6>
               </div>
               <div className="panels">
                  <div className="panel-row">
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={Startup}></img>
          
                        </div>
                        <div className="panel-title">
                           <div>StartUp</div> <div>Acceleration</div>
                        </div>
                        <div className="description">
                        Strategic Planning, Pitch Deck, B2B, B2C Plans, IT Consultation and ROI Management
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
             
                           <img src={mobile}></img>
                        </div>
                        <div className="panel-title">
                           <div>Mobile App</div><div>Development</div>
                        </div>
                        <div className="description">
                           
                        Android App Development, iOS App Development, Hybrid App Development, Flutter and SaaS
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={website}></img>
                        </div>
                        <div className="panel-title">
                           <div>Website</div> <div>Development</div>
                           {/*meny mation */}
                        </div>
                        <div className="description">
                        React, Angular, WordPress, CMS and Admin Web Apps, Marketing Ready Websites
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={enterprise}></img>
                        </div>
                        <div className="panel-title" id="enterprise">
                           <div>Enterprise App</div> <div>Development</div>
                        </div>
                        <div className="description">
                        Sales, Logistics, Inventory and Employee Management, CRM , CMS , POS and SaaS
               
                        </div>
                     </div>
                  </div>
                  <div className="panel-row">
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={productdesign}></img>
                        </div>
                        <div className="panel-title">
                           <div>Product Design</div> <div>and Branding</div>
                        </div>
                        <div className="description">
                        Branding, Corporate Identity, Logo, Marketing Media, Web and Mobile App Design
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={nextgen}></img>
                        </div>
                        <div className="panel-title" id="nextgen">
                           <div>Next Gen</div> <div>Technology</div>
                        </div>
                        <div className="description">
                        AI, AR, VR, ML, Connected Hardware, I.O.T, Automation and Drone Tech
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={Growth}></img>
                        </div>
                        <div className="panel-title" id="growth">
                           <div>Growth</div> <div>Marketing</div>
                        </div>
                        <div className="description">
                        Digital Marketing Campaigns, Media and Video Production, Social Media Marketing and PR
                        </div>
                     </div>
                     <div className="panel-item">
                        <div className="panel-logo">
                           <img src={maintainance}></img>
                        </div>
                        <div className="panel-title" id="maintainance">
                           <div>Maintainance</div> <div>and support</div>
                        </div>
                        <div className="description">
                        Adaptive Enhancements, Updates, Features and Release Management, Server Migration
                        </div>
                  </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}
 
export default Services;