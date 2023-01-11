import React from 'react';
import HeaderServices from '../components/Services/header';
import Navbar from '../components/Services/navbar';
import ListItem from '../components/Services/list-item';
import Industry from '../components/Services/industry';
import Technology from '../components/Services/technology';
import Achievement from '../components/Services/achievement';
import Reason from '../components/Services/reason';
import DropMessage from '../components/Services/drop-message';
import Header from "../components/Header"
import Footer from "../components/HomePart/Footer"
import TabSlider from '../components/Services/tabSlider';

class Services extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isCarousel : false,
            windowWidth: 0,
            isPositionFixed: false,
            selected: "nav-startup-tab",
            isSidebar: false,
            isStatic: false,
            element:"",
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }


    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener("resize", this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
        this.handleResize();
    }
  
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
        
    }

    handleScroll = (event) =>{
        let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);
       // console.log("fdd: "+document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 284 && document.documentElement.scrollTop <= 4670 )
            this.setState({isPositionFixed: true});
        else  
            this.setState({isPositionFixed: false});

        let isStatic = false;
        if(document.documentElement.scrollTop > 5200)
            isStatic = true;
        else
            isStatic = false;
        this.setState({isStatic});
    }

    handleResize = (e) => {
        let isCarousel = this.state.isCarousel;
        if(window.innerWidth < 1140)
            isCarousel = true;
        else
            isCarousel = false;

        this.setState({isCarousel});

        let isSidebar = null;
        if(window.innerWidth <= 880)
            isSidebar = true;
        else
            isSidebar = false;
  
        this.setState({isSidebar});
    };

    

    render(){   
        const {isCarousel, isPositionFixed, isSidebar, isStatic, selected} = this.state;
        const pull_data = (data) => {
            console.log(data)
          } 
        return(
            <div className = "page-wrapper" style={{backgroundColor:"#0b0b0b"}}>
                <HeaderServices/>
                {isCarousel ? <TabSlider /> : <Navbar isStatic = {isStatic} selected = {selected} isPositionFixed = {isPositionFixed} w={pull_data}/>}
                <div className = "industry">
                    <Industry/>
                </div>
                <div className = "technology">
                    <Technology isCarousel = {isCarousel}/>
                </div>
                <div className = "achievement">
                    <Achievement/>
                </div>
                <div className = "reason">
                    <Reason/>
                </div>
                <div className = "drop-message">
                    <DropMessage/>
                </div>
            <div className="Main-footer">
              <Footer />
            </div>
            </div>
        )
    }
}

export default Services;