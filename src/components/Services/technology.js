import React, {Component} from 'react';
import '../../assets/styles/services/technology.css';
import backKeyBoardImg    from '../../assets/images/back-keyboard.jpg';
import partnerSkypeImg    from '../../assets/images/partner-skype.png';
import partnerHpImg       from '../../assets/images/partner-hp.png';
import partnerIntelImg    from '../../assets/images/partner-intel.png';
import partnerNikeImg     from '../../assets/images/partner-nike.png';
import DesignImg from '../../assets/images/media_library/Group-1173.png'
import WebImg from '../../assets/images/media_library/Group-1172.png'
import MobileImg from '../../assets/images/media_library/Group-1184.png'
import NextImg from '../../assets/images/media_library/Group-1185.png'


class Technology extends Component{

    constructor(props){
        super(props);
        this.state = {
            active : "design",
            count: 0
        }

        this.addActiveClass = this.addActiveClass.bind(this);
        this.setIncrementCount = this.setIncrementCount.bind(this);
        this.setDecrementCount = this.setDecrementCount.bind(this);
    }
    
    addActiveClass(e){
        const clicked = e.target.id;
        console.log(clicked);
        this.setState({active : clicked});
    }

    setIncrementCount(){
        let count = this.state.count + 1;
        if(count > 1)
            count = 0;
        this.setState({count});
    }
    
    setDecrementCount(){
        let count = this.state.count - 1;
        if(count < 0)
            count = 2;
        this.setState({count});
    }

    render(){
        return(
        <div className = "tab-technology">
            <div className = "title-tech text-center">
                <div className = "col"><h1><strong>Our Fully Loaded Technology Stack</strong></h1></div >
            </div>
            {
                this.props.isCarousel ? (
                    <div className = {`tab-tech ${this.state.isPositionFixed ? ` tab-list-fixed` : ` static`}`}>
                        <div  className=" carousel carousel-tech slide" data-ride="carousel">
                            <div className="tech-inner">
                                <div id = "item-0" className={`tab-tech-item ${this.state.count === 0 ? ` active` : ``}`}>
                                    <div  id="design" className= {`carousel-item-tech ${this.state.active === "design" ? " active": ""}`} onClick = {this.addActiveClass}>
                                        <span id="design" className="carousel-item-link-tech">Design</span>
                                    </div>
                                    <div id="web" className= {`carousel-item-tech ${this.state.active === "web" ? " active" : ""}`} onClick = {this.addActiveClass}>
                                        <span id="web" className="carousel-item-link-tech">Web</span>
                                    </div>
                                    <div id="mobile" className= {`carousel-item-tech ${this.state.active === "mobile" ? " active" : ""}`} onClick = {this.addActiveClass}>
                                        <span id="mobile" className="carousel-item-link-tech">Mobile Apps</span>
                                    </div>
                                </div>
                                <div id = "item-0" className={`tab-tech-item ${this.state.count === 1 ? ` active` : ``}`}>
                                <div id="devops" className= {`carousel-item-tech ${this.state.active === "devops" ? " active": ""}`} onClick = {this.addActiveClass}>
                                        <span id="devops"className="carousel-item-link-tech">Dev Ops</span>
                                    </div>
                                    <div id="marketing" className= {`carousel-item-tech ${this.state.active === "marketing" ? " active" : ""}`} onClick = {this.addActiveClass}>
                                        <span id="marketing" className="carousel-item-link-tech">Marketing</span>
                                    </div>
                                    <div id="nextgettech" className= {`carousel-item-tech ${this.state.active === "nextgettech" ? " active": ""}`} onClick = {this.addActiveClass}>
                                        <span id="nextgettech" className="carousel-item-link-tech">Next Get Tech</span>
                                    </div>
                                </div>
                            </div>
                            <div onClick = {this.setDecrementCount} className="carousel-control-prev"  role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </div>
                            <div onClick = {this.setIncrementCount} className="carousel-control-next"  role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </div>
                        </div>
                    </div>
                ):(
                    <ul id = "tab-tech" className="tech-list d-flex">
                        <li  id="design" className= {`nav-tech ${this.state.active === "design" ? " active": ""}`} onClick = {this.addActiveClass}>
                            <span id="design" className="nav-link-tech">Design</span>
                        </li>
                        <li id="web" className= {`nav-tech ${this.state.active === "web" ? " active" : ""}`} onClick = {this.addActiveClass}>
                            <span id="web" className="nav-link-tech">Web</span>
                        </li>
                        <li id="mobile" className= {`nav-tech ${this.state.active === "mobile" ? " active" : ""}`} onClick = {this.addActiveClass}>
                            <span id="mobile" className="nav-link-tech">Mobile Apps</span>
                        </li>
                        <li id="devops" className= {`nav-tech ${this.state.active === "devops" ? " active": ""}`} onClick = {this.addActiveClass}>
                            <span id="devops"className="nav-link-tech">Dev Ops</span>
                        </li>
                        <li id="marketing" className= {`nav-tech ${this.state.active === "marketing" ? " active" : ""}`} onClick = {this.addActiveClass}>
                            <span id="marketing" className="nav-link-tech">Marketing</span>
                        </li>
                        <li id="nextgettech" className= {`nav-tech ${this.state.active === "nextgettech" ? " active": ""}`} onClick = {this.addActiveClass}>
                            <span id="nextgettech" className="nav-link-tech">Next Get Tech</span>
                        </li>
                    </ul>
                )
            }
          {
              this.state.active === "design" ? (
                <div id="design" >
                    <img src={DesignImg} />
                </div>
              ): this.state.active === "web" ? (
                <div id="design" >
                    <img src={WebImg} />
                </div>
    
              ):this.state.active === "mobile" ? (
                <div id="design" >
                    <img src={MobileImg} />
                </div>
              ) : this.state.active === "devops" ? (
                <div id = "design" className = "table-tech d-flex" >
                <div className = "image">
                    <img src = {partnerHpImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerIntelImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerNikeImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerSkypeImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerHpImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
          </div>
              ) : this.state.active === "marketing" ? (
                <div id = "design" className = "table-tech d-flex" >
                <div className = "image">
                    <img src = {partnerHpImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerIntelImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerNikeImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerSkypeImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
                <div className = "image">
                    <img src = {partnerHpImg}/>
                    <span className = "caption">Lorem Ipsum</span>
                </div>
          </div>
              ) : this.state.active === "nextgettech" ? (
                <div id="design" >
                    <img src={NextImg} />
                </div>
              ) : null
          }
        </div>
    )
}
}

export default Technology;