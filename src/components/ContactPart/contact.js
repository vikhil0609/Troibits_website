import React from 'react';
import contactstyles from '../../assets/styles/contact/contact.module.css';
import Email from '../../assets/images/media_library/emaillabel.png';
import Phone from '../../assets/images/media_library/phonelabel.png';



class Contact extends React.Component{

    componentDidMount(){
        window.scrollTo(0,0);
        window.addEventListener('load',window.scrollTo(10,10) )
    }

    render(){
    return (
        <div className = "row d-flex text-left" id={contactstyles.heading}>
        <div className = {contactstyles.col}><h1><strong>Let’s Build Something 
                        <br /> Together!</strong></h1>
        </div >
        <div  className={contactstyles.col} >
            <div className={contactstyles.contactRect}>
                
            </div>
                <h3 id={contactstyles.contactDesign}>Design isn’t finished until somebody is using it.
                Let’s build interactive products for<br/> your idea and achieve brilliance together.</h3>
        <br /><br /><br />
        </div >



        <div className = {contactstyles.col} id={contactstyles.contactlast}>
            <img src={Email} />
            <label>contact@troibits.com</label>
            <img src={Phone} />
            <label>+91 989 950 0873</label>
        </div>
    </div>
    );
}
}

export default Contact;