import React, { Component } from 'react';
import '../../assets/styles/homepart/yolo.css';
import '../../assets/styles/homepart/common.css';
import jQuery from 'jquery';
import yoloPhoneColorImg from '../../assets/images/homeimages/yolo-phone-color.png'; //  phone-frame
import arrowLeftImg from '../../assets/images/homeimages/arrow-left.png';
import arrowRightImg from '../../assets/images/homeimages/arrow-right.png';
import bit7pay from '../../assets/images/homeimages/bit7pay.png';
import skylark from "../../assets/images/homeimages/skylark.png"
import google_play from "../../assets/images/homeimages/google_play.png";
import apple from "../../assets/images/homeimages/apple.png";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import Slider from "react-slick";

export default class Yolo extends Component {
    constructor(props) {
        super(props);
        this.selAppItem = "yolo";
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.Arrows = this.Arrows.bind(this)
        this.clickApp = this.clickApp.bind(this)
    }
    next() {
        this.clickApp("next")
        this.slider.slickNext();
    }
    previous() {
        this.clickApp("prev")
        this.slider.slickPrev();
    }
    Arrows() {
        return (
            <div className="arrow-part">
                <img src={arrowLeftImg} onClick={() => this.previous()}></img>
                <img src={arrowRightImg} onClick={() => this.next()}></img>
            </div>
        );
    }
    clickApp(str) {
        if (str == "next") {
            if (this.selAppItem == "yolo") {
                str = "third"
            }

            if (this.selAppItem == "third") {
                str = "first"
            }
            if (this.selAppItem == "first") {
                str = "yolo"
            }
        }
        if (str == "prev") {
            if (this.selAppItem == "yolo") {
                str = "first"
            }

            if (this.selAppItem == "third") {
                str = "yolo"
            }
            if (this.selAppItem == "first") {
                str = "third"
            }
        }
        this.selAppItem = str;
        console.log(this.selAppItem)
        jQuery(".app-content-item").removeClass("active");
        jQuery(".app-content-" + str).addClass("active");
        if (this.selAppItem == "yolo") {

        }

        else if (this.selAppItem == "first") {
            jQuery("#yolo")
            jQuery("#third-app")
            jQuery("#first-app")
        }

        else if (this.selAppItem == "third") {
            jQuery("#third-app")
            jQuery("#first-app")
            jQuery("#yolo")
        }

    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        function clickArrow(dir) {
            if (dir == "left") {
                // if (selAppItem == "first") clickApp('third');
                // else if (selAppItem == "yolo") clickApp('first');
                // else clickApp('yolo');
            }
            else {
                // if (selAppItem == "first") clickApp('yolo');
                // else if (selAppItem == "yolo") clickApp('third');
                // else clickApp('first');
            }
        }
        setTimeout(() => {
            this.clickApp("yolo");
        }, 0);

        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1}>
                        <div className="yolo" id="yolo">
                            <div className="yolo-content subpart-content">
                                <div className="yolo-part left-taxi">
                                    <div>
                                        <div className="notice-blue">Taxi booking</div>
                                        <div className="yolo-title">YOLO</div>
                                        <div className="description">The smartest way to get around</div>
                                        <div className="play_image">
                                            <img src={google_play} />
                                            <img src={apple} />
                                        </div>
                                        <this.Arrows />
                                    </div>
                                </div>
                                <div className="yolo-part center-img">
                                    <img className="yolo-phone-img" src={yoloPhoneColorImg}></img>
                                </div>
                                <div className="yolo-part right-app">
                                    <div className="app-title">App Showcase</div>
                                    <div className="app-content">
                                        <div className="app-content-item app-content-first" onClick={() => this.clickApp('first')}>Skylark</div>
                                        <div className="app-content-item app-content-yolo" onClick={() => this.clickApp('yolo')}>Yolo</div>
                                        <div className="app-content-item app-content-third" onClick={() => this.clickApp('third')}>Bit7Pay</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={2}>
                        <div className="yolo" id="third-app">
                            <div className="yolo-content subpart-content">
                                <div className="yolo-part left-taxi">
                                    <div>
                                        <div className="notice-blue">Cryptocurrency</div>
                                        <div className="yolo-title">Bit7Pay</div>
                                        <div className="description">Buy,Sell and Store multiple cryptocurrencies</div>
                                        <div className="play_image">
                                            <img src={google_play} />
                                            <img src={apple} />
                                        </div>
                                        <this.Arrows />
                                    </div>
                                </div>
                                <div className="yolo-part center-img">
                                    <img className="yolo-phone-img" src={bit7pay}></img>
                                </div>
                                <div className="yolo-part right-app">
                                    <div className="app-title">App Showcase</div>
                                    <div className="app-content">
                                        <div className="app-content-item app-content-first" onClick={() => this.clickApp('first')}>Skylark</div>
                                        <div className="app-content-item app-content-yolo" onClick={() => this.clickApp('yolo')}>Yolo</div>
                                        <div className="app-content-item app-content-third" onClick={() => this.clickApp('third')}>Bit7Pay</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={3}>
                        <div className="yolo" id="first-app">
                            <div className="yolo-content subpart-content">
                                <div className="yolo-part left-taxi">
                                    <div>
                                        <div className="notice-blue">Taxi booking</div>
                                        <div className="yolo-title">Skylar</div>
                                        <div className="description">North India’s Biggest Poultry Group</div>
                                        <div className="play_image">
                                            <img src={google_play} />
                                            <img src={apple} />
                                        </div>
                                        <this.Arrows />
                                    </div>
                                </div>
                                <div className="yolo-part center-img">
                                    <img className="yolo-phone-img" src={skylark}></img>
                                </div>
                                <div className="yolo-part right-app">
                                    <div className="app-title">App Showcase</div>
                                    <div className="app-content">
                                        <div className="app-content-item app-content-first" onClick={() => this.clickApp('first')}>Skylark</div>
                                        <div className="app-content-item app-content-yolo" onClick={() => this.clickApp('yolo')}>Yolo</div>
                                        <div className="app-content-item app-content-third" onClick={() => this.clickApp('third')}>Bit7Pay</div>
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
