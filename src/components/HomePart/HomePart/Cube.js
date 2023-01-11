import React, { Component } from 'react';
import '../../../assets/styles/homepart/home.css';

import shadowBackImg from '../../../assets/images/homeimages/shadow-back.png';
import cubeBackImg from '../../../assets/images/homeimages/cube-back.png';

class Cube extends Component {
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
    //     this.setState({ [key]: value });
    //     this.callSetBase();
    // }
    // callSetBase () {
    //     setTimeout(() => {
    //         this.props.callSetBase({length:this.state.length, thick:this.state.thick, height:this.state.height, vase:this.state.vase});
    //     }, 0);
    // }

    render() {
        return (
            <div className="home">
                    <div className="right-webgl home-part" id="rightWebGL">
                        {/* <div id="colorShadow"><img src={shadowBackImg} /></div>
                        <div id="container"><img src={cubeBackImg} /></div> */}
                    </div>
                </div>
        )
    }
}
  
export default Cube;