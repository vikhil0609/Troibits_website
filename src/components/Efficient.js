import React from 'react';
import '../assets/styles/homepart/efficient.css';
import '../assets/styles/common.css';
import backKeyBoardImg    from '../assets/images/back-keyboard.jpg';
import partnerSkypeImg    from '../assets/images/partner-skype.png';
import partnerHpImg       from '../assets/images/partner-hp.png';
import partnerIntelImg    from '../assets/images/partner-intel.png';
import partnerNikeImg     from '../assets/images/partner-nike.png';

const Effcient = () => {
    function animatenumber(){
        console.log("hello");
    }
    return (
        <div className="efficient" style = {{ backgroundImage:`url(${backKeyBoardImg})` }}>
            <div className="efficient-content subpart-content">

                <div className="efficient-part left-partners">
                    <div className="efficient-title">Our partners</div>
                    <div className="partners-content">
                        <div className="partner-item">
                            <img className="partnerHpImg" src={partnerSkypeImg}></img>
                            <div className="label">Skype</div>
                        </div>
                        <div className="partner-item">
                            <img className="partnerHpImg" src={partnerHpImg}></img>
                            <div className="label">Hewlett-packard</div>
                        </div>
                        <div className="partner-item">
                            <img src={partnerIntelImg}></img>
                            <div className="label">Intel Corp</div>
                        </div>
                        <div className="partner-item">
                            <img src={partnerNikeImg}></img>
                            <div className="label">Nike</div>
                        </div>
                    </div>
                    <div className="chat-btn">Let's chat</div>
                </div>

                <div className="efficient-part center-about">
                    <div className="efficient-title">About Company</div>
                    <div className="big-title">
                        <div>Effcient &&nbsp;</div> <div>trustworthy</div>
                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    </div>
                    <div className="chat-btn">Let's chat</div>
                </div>

                <div className="efficient-part right-number">
                    <div className="number-item">
                        <div className="number">
                            </div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    </div>
                    <div className="number-item">
                        <div className="number">29</div>
                        <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    </div>
                </div>


            </div>
        </div>
    );
}
 
export default Effcient;