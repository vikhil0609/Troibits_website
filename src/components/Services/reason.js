import React from 'react';
import '../../assets/styles/services/reason.css';
import smart_image from "../../assets/images/media_library/Group-1174.png"
import architecture_image from "../../assets/images/media_library/Group-1176-1.png"
import Team_image from "../../assets/images/media_library/Group-1175-1.png"
import { Color } from 'three';

function Reason(){
    return(
        <div className="reason-component">
            <div className="reason-header">
                <h1>What makes us different</h1>
            </div>
            
            <div className="reason-mid1">

                <img src={smart_image} />
                <div className="reason1-sub">
                    <h4>Smart Thinking And Strategy</h4>
                    <div className="bar1"></div>
                    <h6 style={{Color:"#696969"}}>
                    Our well planned strategy and agile approach is a crucial component in delivering 
                    successful app based systems to growing businesses. Vastly 
                    accelerating digital transformation with automation, AI-assistance and well-planned modern applications.
                    </h6>
                </div>
            </div>
            <div className="reason-mid2">
                <div className="reason2-sub">
                    <h4>Advanced Architecture And Design</h4>
                    <div className="bar2"></div>
                    <h6>
                    We strategically lay the foundation stone before
                     developing any mobile application, enabling us to
                      offer all features, functionalities and interactive
                       user experience that takes your app into the zone 
                       of success and offers
                     the growth prospect for the business to flourish.
                    </h6>
                </div>
                <img src={architecture_image} />
            </div>
            <div className="reason-last">
                <div className="reason-mid1">
                <img src={Team_image} />
                <div className="reason1-sub">
                    <h4>Team Work And Planning</h4>
                    <div className="bar1"></div>
                    <h6 style={{Color:"#696969"}}>
                    Adding value to your business and customers requires speed and
                     flexibility. Our multidisciplinary teams work together, side 
                     by side and throughout the process. Open communication, 
                     combined with efficient and effective deliveries results in 
                     our well developed apps to meet your business and customer expectations. </h6>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Reason;