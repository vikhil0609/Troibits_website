import React from 'react';
import { NavLink } from "react-router-dom";
import Mockup from '../../assets/images/Mockup.svg';
import partnerIntelImg from '../../assets/images/partner-intel.png';
import Leo from '../../assets/images/lio.jpg';
import '../../assets/styles/services/achievement.css';
import group1 from '../../assets/images/media_library/groupasda.png';
import yolo from "../../assets/images/media_library/152-min.png"
import glaucus from "../../assets/images/media_library/11_Laptop_Mockup-min-min.png"
import Slider from "react-slick";



const Achievement = () => {
    return (
        <div className="achievement-challenges">

            <div className="achievement-titl text-center">
                <div className=""><h1><strong>Achievements and Challenges</strong></h1></div >
            </div>
            <div>
                <AchievementItems />
            </div>

            <div className="project">
                <h2>Advancing beyond your Experience</h2>
                <h4>
                    Smart UI and intuitive design is our forte. We customise it for you after proper ideation, research, planning and create something on a blank,
                    canvas which stands out, is minimal and uniquely crafted for your business.</h4>
                <div className="explore_more">
                    <NavLink to="/work" className="variant">Explore More Project</NavLink>
                </div>
            </div>
            <div className="client">
                <div className="client-title text-center">
                    <div className="col"><strong><h1>Our Clients Love Us</h1></strong></div >
                </div>
                <ClientItems />
            </div>
            <div className="footer-logo-ach">
                <div className="image">
                    <img src={group1} />
                </div>
            </div>
        </div>
    )
}

class ClientItems extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div id="carouselExampleControls" className="carousel  carousel-client slide" data-ride="carousel">
                        <div className=" inner-client main-div" id="client1" >
                            <div className="d-flex client-item-box active">
                                <div className="header-client-box d-flex">
                                    <div className="profile-client d-flex">
                                        <img src={Leo} />
                                        <div className="profile-info">
                                            <h5>Lorenzo Zamorano</h5>
                                            <h6 className="text-primary">Manage at Yolo</h6>
                                        </div>
                                    </div>
                                    <div className="company-logo">
                                        <img src={partnerIntelImg} />
                                    </div>
                                </div>
                                <div className="body-client-box d-flex" >
                                    <div className="client-word">
                                        <p>
                                            &#10077; Tarun made pixel perfect designs for yolo cabs &#10078;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="carouselExampleControls" className="carousel  carousel-client slide" data-ride="carousel">
                        <div className=" inner-client" id="client2">
                            <div className="d-flex client-item-box active">
                                <div className="header-client-box d-flex">
                                    <div className="profile-client d-flex">
                                        <img src={Leo} />
                                        <div className="profile-info">
                                            <h5>Anurag Chandel</h5>
                                            <h6 className="text-primary">Founder at Bit7pay</h6>
                                        </div>
                                    </div>
                                    <div className="company-logo">
                                        <img src={partnerIntelImg} />
                                    </div>
                                </div>
                                <div className="body-client-box d-flex" >
                                    <div className="client-word">
                                        <p>
                                            &#10077; we have been working with troibits for more
                                            than 2 years and Customers use our
                                            Cryptocurrency apps everyday  &#10078;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="carouselExampleControls" className="carousel  carousel-client slide" data-ride="carousel">
                        <div className=" inner-client" id="client3">
                            <div className="d-flex client-item-box active">
                                <div className="header-client-box d-flex">
                                    <div className="profile-client d-flex">
                                        <img src={Leo} />
                                        <div className="profile-info">
                                            <h5>Mandeep Kanwal</h5>
                                            <h6 className="text-primary">Solution Architect at Glaucus Logistics</h6>
                                        </div>
                                    </div>
                                    <div className="company-logo">
                                        <img src={partnerIntelImg} />
                                    </div>
                                </div>
                                <div className="body-client-box d-flex" >
                                    <div className="client-word">
                                        <p>
                                            &#10077; We really liked our warehouse Management
                                            System Design and Troibits implemented
                                            every feature perfectly.
                                            &#10078;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

class AchievementItems extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="item-main">
                        <div className="mid" id="bit7pay">
                            <img src={Mockup} />
                            <div>
                                <div className="mid-title">Bit7pay</div>
                                <div className="sub-text">
                                    <div className="mid-sub" style={{ color: "#0072ff" }}>
                                        Cryptocurrency Wallet & Exchange
                                    </div>
                                    <p>
                                        Bit7 pay is Cryptocurrency wallet & Exchange
                                        to store Buy and sell Bitcoin,Ethereum,Ripple,
                                        Bitcoin Gold and keep all other cryptocurrencies
                                        safe.Download Bit7pay on your mobile and get
                                        your account verified within hours to make your
                                        first investment. We made an easy to use
                                        inteface that allows users to quickly make the
                                        transactions with no latency. Troibits helped
                                        Bit7pay to run it's cloud servers on the latest
                                        hardware available today
                                    </p>
                                    <div style={{ color: "#0072ff" }}>
                                        Android | iOS | Web
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-main">
                        <div className="mid" id="yolo">
                            <img src={yolo} />
                            <div>
                                <div className="mid-title">Yolo</div>
                                <div className="sub-text">
                                    <div className="mid-sub" style={{ color: "#0072ff" }}>
                                        Taxi Booking platform
                                    </div>
                                    <p>
                                        Yolo cabs is the smartest way to get around.
                                        One tap and a car comes directly to you. Your
                                        dirver knows excatly where to go. And you can
                                        pay either cash or card. Daily commute.
                                        Errand across town. Early morning flight. Late
                                        night drinks. wherever you're headed, Count
                                        on YoloCabs for a ride -no reservations
                                        needed.You can always request everyday cars
                                        at everyday prices. But sometimes you need a
                                        bit more space. Or you want to go big on style.
                                        With YoloCabs, the choice is yours
                                    </p>
                                    <div style={{ color: "#0072ff" }}>
                                        Android | iOS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-main">
                        <div className="mid" id="glaucus">
                            <img src={glaucus} />
                            <div>
                                <div className="mid-title">Glaucus Logistics</div>
                                <div className="sub-text">
                                    <div className="mid-sub" style={{ color: "#0072ff" }}>
                                        Warehouse Management System
                                    </div>
                                    <p>
                                        We made a perfect design and UI in Angular Js
                                        for Galucus Logistics.They have been founded by
                                        a team with exhausitve experience of supple chain
                                        solutions,advisory,Warehouse design and
                                        technology product development. They are the
                                        preffered supply chain management partner for
                                        small and mid-sized companies focusing on trading,
                                        retail & wholesale distribution allowing businesses to
                                        effectively compete with their larger competitors on
                                        effencies and effectiveness.
                                    </p>
                                    <div style={{ color: "#0072ff" }}>
                                        Mac | windows | Web
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
export default Achievement;
