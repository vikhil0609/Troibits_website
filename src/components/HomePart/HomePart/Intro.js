import React from 'react';
import jQuery from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import '../../../assets/styles/homepart/intro.css';
import '../../../assets/styles/homepart/common.css';

import userAvatarImg      from '../../../assets/images/homeimages/user-avatar.png';

const Intro = () => {
    const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };
    var introAutoSlide = setInterval(() => {
        // jQuery(".intro .slick-slider .slick-next").click();
    }, 3000);
    // clearInterval(introAutoSlide);
    // function loadedIntroSlider() {}

    return (
        <div className="intro">
            <div className="intro-top top-tri tri-part"></div>
            <div className="intro-content subpart-content">

                <div className="slider-wrap">
                    <Slider {...settings}>
                        <div>
                            <div className="slider-item">
                                <div className="user-img">
                                    <img src={userAvatarImg}></img>
                                </div>
                                <div className="user-info">
                                    <div className="user-detail">
                                        <div className="user-name">Daniel Fisher</div>
                                        <div className="user-role">Art director at Intel Corp</div>
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div>
                            <div className="slider-item">
                                <div className="user-img">
                                    <img src={userAvatarImg}></img>
                                </div>
                                <div className="user-info">
                                    <div className="user-detail">
                                        <div className="user-name">Daniel Fisher</div>
                                        <div className="user-role">Art director at Intel Corp</div>
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    </div>
                                </div>
                            </div>
                       </div>
                       <div>
                            <div className="slider-item">
                                <div className="user-img">
                                    <img src={userAvatarImg}></img>
                                </div>
                                <div className="user-info">
                                    <div className="user-detail">
                                        <div className="user-name">Daniel Fisher</div>
                                        <div className="user-role">Art director at Intel Corp</div>
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    </div>
                                </div>
                            </div>
                       </div>
                    </Slider>
                </div>
            </div>

            <div className="intro-footer foot-tri tri-part"></div>
        </div>
    );
}
 
export default Intro;