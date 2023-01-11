import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import Mockup    from '../../assets/images/Mockup.svg';
import yolo from "../../assets/images/media_library/152-min.png"
import glaucus from "../../assets/images/media_library/11_Laptop_Mockup-min-min.png"


class DemoCarousel extends Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel carousel-mockup slide" data-ride="carousel">
                <div className="carousel-inner" id="bit7">
                    <div className="d-flex carousel-item puppy active">
                         <img className="d-block w-40" src={Mockup} alt="First slide"/>
                         <div className = "description d-flex">
                            <div className = "header-desc ">
                                <h3 className = "title-desc">Bit7pay</h3>
                                <h5 className = "sub-title text-primary">Cryptocurrency Wallet</h5>
                            </div>
                            <div className = "body-desc" >
                                <p className = "text-secondary w-80">
                                    Bit7Pay is a Cryptocurrency Wallet & Exchange to store
                                    Buy and Sell Bitcoin, Ethereum, Ripple,Bitcoin Gold and keep
                                    all all other Cryptocurrencies safe. Download Bit7Pay on your mobile and 
                                    get your account verified within hours to make your first investment
                                    . We made an easy to use interface that allows users to quickly make 
                                    the transactions with no latency. Troibits helped Bit7Pay to run its 
                                    cloud servers on the latest hardware available today.
                                </p>
                            </div>
                            <div className = "footer-desc">
                                <div className = "know">
                                    <NavLink to={"#"}>View Case Study<i className="material-icons">keyboard_arrow_right</i></NavLink>
                                </div>
                            </div>
                         </div>
                   </div>
    
                    <div className="d-flex carousel-item puppy">
                         <img className="d-block w-40" src={yolo} alt="First slide"/>
                         <div className = "description d-flex">
                            <div className = "header-desc ">
                                <h3 className = "title-desc">yolo</h3>
                                <h5 className = "sub-title text-primary">Taxi Booking Platform</h5>
                            </div>
                            <div className = "body-desc" >
                                <p className = "text-secondary w-80">
                                    Yolo cabs is the smartest way to get around.
                                    one tap and a car comes diredctly to you. Your
                                    driver knows exactly where to go. And you can 
                                    pay either cash or card. Daily Commute.
                                    Errand across town. Early morning flight. Late 
                                    night drinks. Wherever you're headed, count 
                                    on YoloCabs for a ride no reservations needed.
                                    you can always request everyday cars at everyday 
                                    prices. But sometimes you need a bit more space. 
                                    Or you want to go big on style. with YoloCabs,
                                    the choice is yours. 

                                </p>
                            </div>
                            <div className = "footer-desc">
                                <div className = "know">
                                    <NavLink to={"#"}>View Case Study<i className="material-icons">keyboard_arrow_right</i></NavLink>
                                </div>
                            </div>
                         </div>
                   </div>
                    <div className="d-flex carousel-item puppy">
                         <img className="d-block w-40" src={glaucus} alt="First slide"/>
                         <div className = "description d-flex">
                            <div className = "header-desc ">
                                <h3 className = "title-desc">Glaucus Logistics</h3>
                                <h5 className = "sub-title text-primary">Warehouse Management System</h5>
                            </div>
                            <div className = "body-desc" >
                                <p className = "text-secondary w-80">
                                    We made a perfect design and UI in Angular js
                                    for Glaucus Logistics. They have been founded by 
                                    a team with exhaustive experience of supply chain
                                    solutions, advisory, warehouse design and
                                    technology product development. They are the 
                                    preffered supply chain management partner for 
                                    small and mid-sized companies focusing on terading,
                                    retail & wholesale distribution allowing businesses to
                                    effectively compete with their larger competitors on 
          
                                    effciency and effectiveness.
                                </p>
                            </div>
                            <div className = "footer-desc">
                                <div className = "know">
                                    <NavLink to={"#"}>View Case Study<i className="material-icons">keyboard_arrow_right</i></NavLink>
                                </div>
                            </div>
                         </div>
                   </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                        
            </div> 
        );
    }
};

export default DemoCarousel;