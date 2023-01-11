import React from 'react';
import contactstyle from  '../../assets/styles/work/work.module.css'
import Android from '../../assets/images/media_library/Group-977.png'
import Logistics from '../../assets/images/media_library/Group-978.png'
import Yolo from '../../assets/images/media_library/Group-979.png'
import CaptainThug from '../../assets/images/media_library/Group-980.png'
import Excursify from '../../assets/images/media_library/Group-981.png'
import CoinKarts from '../../assets/images/media_library/Group-982.png'
import Hospitals from '../../assets/images/media_library/Group-98332.png'
import BluePaisa from '../../assets/images/media_library/Group-984.png'
import Gamerz from '../../assets/images/media_library/Group-985.png'
import '../../assets/styles/header.scss'



class Work extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener('load', window.scrollTo(10,10));
    }

    render(){
    return(
        <div className={contactstyle.start} >
           <div className = {contactstyle.col} id={contactstyle.workmain}><h1><strong>We <span style={{color:"#0a5de9" }}>Create </span>
                                     Websites and Apps</strong></h1>
            </div>
            <div className={contactstyle.col} id={contactstyle.workmain}>
                <h6>
                Our design is a key factor why we are able to create better products as we do a proper research 
                and planning before ideations <br />
                and create something on a blank piece of paper which stands out and is minimal.
                </h6>
                <br/> <br/>

            <div className="" id={contactstyle.row}>
               <div className={contactstyle.WorkColumn}>
                    <img src={Android} id={contactstyle.Image} />
               </div>
               <div className={contactstyle.WorkColumn}>
                    <img src={Logistics} id={contactstyle.Image} />
               </div> 
               <div className={contactstyle.WorkColumn}>
                    <img src={Yolo} id={contactstyle.Image}/>
               </div>  
            </div> 
           
            <div className="" id={contactstyle.row}>
                <div className={contactstyle.WorkColumn}>
                        <img src={CaptainThug} id={contactstyle.Image} />
                </div>
                <div className={contactstyle.WorkColumn}>
                        <img src={Excursify} id={contactstyle.Image}/>
                </div> 
                <div className={contactstyle.WorkColumn}>
                        <img src={CoinKarts} id={contactstyle.Image}/>
               </div> 
            </div>

            <div className="" id={contactstyle.row}>
                <div className={contactstyle.WorkColumn}>
                        <img src={Hospitals} id={contactstyle.Image}/>
                </div>
                <div className={contactstyle.WorkColumn}>
                        <img src={BluePaisa} id={contactstyle.Image}/>
                </div> 
                <div className={contactstyle.WorkColumn} >
                    <img src={Gamerz} id={contactstyle.Image}/>
               </div> 
            </div>
            </div>

            <div className={contactstyle.col} id={contactstyle.Worklast}>
                <h2 style={{color:"white"}}>
                    Want us to craft well designed apps and digitally transform<br/> your business?  
                </h2>
            </div>

            <div className={contactstyle.col}>
            <a href="/contact"> 
                <button className={contactstyle.btn}>
                    Drop us a message
                </button>
                </a>
            </div>
        </div>
    );
}
}

export default Work;