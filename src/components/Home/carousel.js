import React, { Component } from 'react';
import '../../assets/styles/home/carousel.css';
import shadowBackImg from '../../assets/images/shadow-back.png';
import cubeBackImg from '../../assets/images/cube-back.png';

class Carousel extends Component {
    constructor(props) {
        super(props);
        // this.state = props.data;
        // this.selItem = props.selItem;
    }
    
    componentDidMount() {
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
        return (
            <div className="carousel-homepage">
                <div className="carousel-homepage-content subpart-content">
                    <div className="left-string carousel-homepage-part">
                        <div className="title">Mobile App and Game Design</div>
                      
                        <div className="int-line"></div>
                        <div className="description pro-thin">
                           Our design is a key factor why we are able to create better products as we do proper ideation, research, planning then create something on a blank piece of paperwhich stands out and is minimal
                        </div>
                        <div className="chat-btn">Lets Chat!</div>
                    </div>
                    <div className="right-webgl carousel-homepage-part" id="rightWebGL">
                        <div id="colorShadow"><img src={shadowBackImg} /></div>
                        <div id="container-caouserl"><img src={cubeBackImg} /></div>
                    </div>
                </div>
            </div>
        )
    }
}
  
export default Carousel;