import React ,{Component} from 'react';
import '../../assets/styles/homepart/efficient.css';
import '../../assets/styles/homepart/common.css';
import AnimatedNumber from "animated-number-react";

import backKeyBoardImg    from '../../assets/images/homeimages/back-keyboard.jpg';
import partnerSkypeImg    from '../../assets/images/homeimages/partner-skype.png';
import partnerHpImg       from '../../assets/images/homeimages/partner-hp.png';
import partnerIntelImg    from '../../assets/images/homeimages/partner-intel.png';
import partnerNikeImg     from '../../assets/images/homeimages/partner-nike.png';

class  Effcient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            long:10
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.formatValue = this.formatValue.bind(this);
    }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
      handleScroll(event) {
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
        var b = document.getElementById("efficient_main")
        var longA = (b.offsetTop - (window.pageYOffset )) - 450
        this.setState({long: longA});
      }

      formatValue(value){
        return value.toFixed(0)

        
    }
    render(){
    return (
        <div id="efficient_main" onScroll={() => this.handleScroll.bind(this)}>
        <div className="efficient">
           <div className="efficient-left">
                <div className="left-head" id="efficient-head">
                    Our Partners
                </div>
                <div className="left-SubText">
                    <img src={partnerNikeImg} className="partnerLogo" />
                   Skype
                </div>
                <div className="left-SubText">
                <img src={partnerNikeImg} className="partnerLogo" /> 
                    Hewlett-Packard
                </div>
                <div className="left-SubText">
                <img src={partnerNikeImg} className="partnerLogo" />
                    Intel-crop
                </div>
                <div className="left-SubText">
                <img src={partnerNikeImg} className="partnerLogo" />
                    Intel
                </div>
           </div>
           <div className="efficient-vrline"></div>
           <div className="efficient-mid">
                <div className="mid-head">
                    About Company
                </div>
                <div className="mid-mid">
                    <h1><strong>Efficient &</strong> </h1>
                    <h1><strong>Trustworthy</strong></h1>
                </div>
                <div className="mid-subText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        eli, sed do eisumod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud execrecitation ullamco laboris nisi ut
                        Lorem ipsum dolor sit amet
                    </p>
                </div>
                <div>
                    <a href="/contact"><button>Lets Chat</button></a> 
                </div>
           </div>
           <div className="efficient-end">
               <div>
               <div className="end-head">
                   {this.state.long <=0 &&
                                       <strong>
                                       <AnimatedNumber
                                        value={353}
                                        formatValue={this.formatValue}
                                        duration={1000}
                                        />
                                    </strong>
                   }
                   {this.state.long >0 &&
                                       <strong>
                                       <AnimatedNumber
                                        value={0}
                                        formatValue={this.formatValue}
                                        duration={100}
                                        />
                                    </strong>
                   }
               </div> 
               <div className="end-subText">
                   <p> Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing </p>
               </div>
               </div>
               <div>
                <div className="end-head">
                {this.state.long <=0 &&
                                       <strong>
                                       <AnimatedNumber
                                        value={29}
                                        formatValue={this.formatValue}
                                        duration={1000}
                                        />
                                    </strong>
                   }
                   {this.state.long >0 &&
                                       <strong>
                                       <AnimatedNumber
                                        value={0}
                                        formatValue={this.formatValue}
                                        duration={1000}
                                        />
                                    </strong>
                   }
                </div>
                <div className="end-subText">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing
               </div>
               </div>
           </div>
        </div>
        <div className="notice top-tri tri-part">
         </div>
        <div className="info">

            <h1>Liked Our Designs?</h1>
            <a href="/contact"><button>Drop a message</button></a>
        </div>
        </div>
    );
    function animateValue(id, start, end, duration) {
        if (start === end) return;
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementsByClassName(id);
        console.log(obj)
        var timer = setInterval(function() {
            current += increment;
            console.log(current)
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

}
}
 
export default Effcient;