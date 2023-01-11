import React from 'react';
import ListItem from './list-item';
import '../../assets/styles/services/tabSlider.css';



class TabSlider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            isPositionFixed: false,
            selected: ""
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render(){
        const pull_data = (data) => {
        }
        return(
            <div id = "slider-container" className = "slider-container">
                <ListItem func={pull_data}/>
            </div>
        )
    }
}
export default TabSlider;