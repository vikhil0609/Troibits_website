import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/styles/services/drop-message.css';

function DropMessage(){
    return(
        <div className = 'drop-message-component'>
                <div className="label d-none">Our Services</div>
            <div className = "drop-title text-center">
                <div className = "col"><h1><strong>Are You Impressed ?</strong></h1></div >
            </div>
            <div className = "box d-flex">
                <NavLink to = "/contact" className = "variant">Drop us a Message</NavLink>
            </div>
        </div>
    )
}

export default DropMessage;