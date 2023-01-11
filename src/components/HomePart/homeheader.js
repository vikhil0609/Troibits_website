import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import  '../../assets/styles/header.scss';
import Gradient from "../../assets/images/gradient.png";
import jQuery from 'jquery';


class HomeHeader extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          active :"home",
          isPositionFixed: false,
          isCarousel : false,
          isGradient: true,
          isnav : 0,
      }
      this.addActiveClass = this.addActiveClass.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
   }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.addEventListener("resize", this.handleResize);
    }

    handleResize = (e) => {
      let isCarousel = null;
      if(window.innerWidth <= 880)
          isCarousel = true;
      else
          isCarousel = false;

      this.setState({isCarousel});
   };

  
  handleScroll(event) {
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

       if(event.srcElement.body.scrollTop > 200 || document.documentElement.scrollTop > 200  ){
         jQuery("#Scroll").css({"background-color":"#0b0b0b",position:"fixed"})
          this.setState({isPositionFixed: true});
          this.setState({isGradient:false});
       }
       else{
         jQuery("#Scroll").css({"background-color":"transparent",position:"absolute"})
          this.setState({isPositionFixed: false});
         this.setState({isGradient:true});
         }
}

    addActiveClass(e){
      const clicked = e.target.id;
      this.setState({active : clicked});
   }



   render(){  
      const {isCarousel} = this.state;
      if(!isCarousel)
         
         return (
            <div id="Scroll" style={{backgroundColor:"transparent"}} className= {`header-wrap${this.state.isPositionFixed ? ' fixed' : ""}`} onScroll = {this.handleScroll}>
               <div className="header">
                  <div className="left-logo">
                     <img className="logo-img" src={logoImg} />
                     {/* <label className="logo-label">Troibits</label> */}
                     <div>
                     <img className={`${this.state.isGradient ? "gradient-background": "gradient-none"}`}  src={Gradient} />
                  </div>
                  </div>

                  <div className="menu menuA">
                     <NavLink id = "home" className= {`menuA-item ${this.state.active === "home" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/home">
                           Home
                           <div id = "home" className="circle"></div>
                     </NavLink>
                     <NavLink id = "services" className= {`menuA-item ${this.state.active === "services" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/services">
                           Services
                     </NavLink>
            
                     <NavLink id = "company" className= {`menuA-item ${this.state.active === "company" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/company">
                           Company
                     </NavLink>
                     <NavLink id = "work" className= {`menuA-item ${this.state.active === "work" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/work">
                           Work
                     </NavLink>
                     <NavLink id = "contact" className= {`menuA-item ${this.state.active === "contact" ? " blue text-primary" : ""}`} onClick = {this.addActiveClass} to="/contact">
                           Contact
                     </NavLink> 
                  </div>
               </div>
            </div>
        );
      else
      return(
         <div className="menu-B">
           <div id="mySidebar" className="sidebar">
            <a className="closebtn" onClick={() => closeNav()}>×</a>
            <div className="sidebarcompany">
            {/* <img src={logoImg} /> */}
            <label>&nbsp;Troibits </label>
            </div>
            <div className="sidebarBar">
            </div>
            <div>
            <NavLink className="sidebarText" to="/home" onClick={() => closeNav()} >
               HOME
            </NavLink>
            <NavLink className="sidebarText" to="/services" onClick={() => closeNav()} >
               SERVICES
            </NavLink>
            <NavLink className="sidebarText" to="/company" onClick={() => closeNav()} >
               COMPANY
            </NavLink>
            <NavLink className="sidebarText" to="/work" onClick={() => closeNav()}>
               WORK
            </NavLink>
            <NavLink className="sidebarText" to="/contact" onClick={() => closeNav()}>
               CONTACT
            </NavLink>
            </div>
            <div className="sidebarBar"></div>
            </div>
            <div id="main">
            <a className="openbtn" onClick={() => openNav()}>☰</a>  
         </div>
         
         </div>
      )

      function openNav() {
         document.getElementById("mySidebar").style.width = "300px";
         document.getElementById("main").style.marginLeft = "300px";
       }
       
       function closeNav() {
         document.getElementById("mySidebar").style.width = "0";
         document.getElementById("main").style.marginLeft= "0";
       }
}
}
export default HomeHeader;