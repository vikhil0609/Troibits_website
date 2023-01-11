import React, { Component ,useEffect, useState } from 'react';
import '../../assets/styles/homepart/home.css';

import shadowBackImg from '../../assets/images/homeimages/shadow-back.png';
import cubeBackImg from '../../assets/images/homeimages/cube-back.png';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = props.data;
        // this.selItem = props.selItem;
    }
    
    componentDidMount() {
        window.addEventListener('scroll', console.log("helo"));
    }

    componentWillReceiveProps(nextProps) {
        // if (this.selItem != nextProps.selItem) {
        //     this.selItem = nextProps.selItem;
        // }
    }


    // changeSize = (value, key) => {
    // this.setState({ [key]: value });
    //      this.callSetBase();
    // }
    // callSetBase () {
    //     setTimeout(() => {
    //         this.props.callSetBase({length:this.state.length, thick:this.state.thick, height:this.state.height, vase:this.state.vase});
    //     }, 0);

    
    // }
    

    render() {
        const onScroll = (e) => {
            console.log("hello")
          };
        function scroll_to_next_component(){
            var h = (window.innerHeight) - 40;
            window.scrollTo(0,h);
        }
        return (
            <div onScroll={onScroll}>
            <div className="home">
                <div className="home-left">
                    <div className="home-heading">
                        Mobile App Development 
                        <div>
                         & Digital Tranformation
                        </div>
                    </div>
                    <div className="home-line"></div>
                    <div className="home-subtext">
                        We are your extended team who keeps digitizing your business and 
                        moves the software development and marketing process quickly
                        with latest innovations and smart app systems.
                    </div>
                    <a href="/contact" style={{textDecoration:"none"}}>
                    <div className="home-chat-btn">
                        Let's chat
                    </div></a>
                </div>
                <div className="right-webgl home-part" id="rightWebGL">
                        <div id="colorShadow"><img src={""} /></div>
                        <div id="container"><img src={""} /></div>
                    </div>
            </div>
            <div className="notice top-tri tri-part">
            <div className="label">Our Services</div>
            <span onClick={() => scroll_to_next_component()}></span>
         </div>
            </div>
        );
    }
}
  
export default Home;