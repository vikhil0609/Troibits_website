import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import logoImg from '../../assets/images/logo.png';
import '../../assets/styles/services/list-item.scss';
import Growth from "../../assets/images/serivces/growth.PNG"
import startup from "../../assets/images/serivces/startup.PNG"
import mobile from "../../assets/images/serivces/mobile.PNG"
import website from "../../assets/images/serivces/website.PNG"
import ProductDesign from "../../assets/images/serivces/product.PNG"
import enterprise from "../../assets/images/serivces/enterprise.PNG"
import maintainance from "../../assets/images/serivces/maintainance.PNG"
import NextGen from "../../assets/images/serivces/nextgen.PNG"
import jQuery from "jquery";

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) =>{ 
        var s = (document.querySelector('#last').getBoundingClientRect().top)
        var element = document.body.scrollTop || document.documentElement.scrollTop
        var element = element - s
        if (element >= 0){
            this.props.func(element);
    
        }
    }

    render(){
    const {isPositionFixed, isCarousel, isStatic, estatico, isSticky} = this.props;
    return (
        <div className = {`list-name-container ${isSticky ? ' stick': estatico ? ' status': ''}`}>
            <div 
            className=
            {`list-item tab-content  py-3 px-3 px-sm-0 d-flex 
             ${isPositionFixed ? ` carou`: ``}`} id="startup-accelerator">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Statup Accelerator</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {startup}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    We put in place a strategic plan and create a roadmap for your
                     business and properly research the market and the segment in which
                      you plan to grow your business in. Strategic planning is one of the
                       key services provided by Troibits Infotech. We help startups through
                        analysis, statistics, and strategy. Our customers partner with us to 
                        plan critical steps for their startup business. Our continuous
                         analysis of the market trends and dynamics keeps us alert to changes
                          and developments in different market sectors and we advise you as per that.</p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span id="text">Strategy Planning</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Pitch Deck</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>B2B,B2C Marketing</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>ROI Management</span></NavLink>
                        
                        </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className= {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="b">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Product Design</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {ProductDesign}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    Our well crafted designs and product branding builds the perfect 
                    opportunity to create an interest in your brand and attract your 
                    customers in the first impression. Our product design and app design
                     features are all about providing value to your customers and linking 
                     their needs to product attributes. A good design defines the lifetime
                      of the product and should exceed customer’s expectations. Troibits 
                      helps to create better products that compete on value,
                     satisfy the customer and makes your business operations easy.
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span>Logo and Corporate Identity</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Branding and Marketing Media</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Web and Mobile App Design</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Animation and Graphics</span></NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="c">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Mobile App Development</h1>
                    <div className = "bara"> &nbsp; </div>
                    </div>
                    <div className = "col icon"><img src = {mobile}/></div>
    
                </div>
                <div className = "body-list">
                    <p>Smartphones are a big part of our lives and businesses
                         now and have become very useful. The power of
                          internet and smart apps fits into the pocket of 
                          anyone who carries a smartphone. With more than 60% 
                          share in the total web traffic worldwide, having a well 
                          developed and designed mobile app increases productivity 
                          and sales in your business. Smart Apps developed by 
                          Troibits and digitization of your business provides value
                          to your customers, builds your brand,
                          shares exclusive content and strengthens customer loyalty.  </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span>Android App Development</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>iOS App Development</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Hybrid App Development</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Flutter and SaaS</span></NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="d">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Web App Development</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {website}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    Your business needs an attractive and appealing website to increase
                     traffic, build your digital identity and lead to high conversion rates.
                      Getting a responsive marketing ready and SEO friendly website not only
                       brings mobile users onboard but also increases brand visibility on
                        multiple platforms. We make sure your website is developed with 
                        interactive design, attracting customers in the first glance,
                         reflecting your brand and your business idea in the best way
                          possible. Our custom web apps and websites are made as per unique
                           digital marketing strategies for brands looking for flawless web designs.</p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span>React, Angular and Vue Js</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Wordpress, Woo-commerce, SEO</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>CMS and Admin Web Apps</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Marketing Ready Websites</span></NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="e">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Enterprise App Development</h1>
                    <div className = "bara"> &nbsp; </div>
                    </div>
                    <div className = "col icon"><img src = {enterprise}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    With the increasing impact of Internet of Things and advanced mobile
                     devices, businesses are going overboard developing enterprise apps to
                      improve productivity and efficiency. Our smart enterprise apps empower
                       remote workers, sales executives and improves teamwork. Our enterprise
                        apps offer unparalleled real-time insights increasing engagement and
                         sales. We help you transform your business and help it evolve for
                          future growth by developing custom real-time enterprise app systems
                           providing simpler management of information, improved teamwork
                    , simple and easy to use interfaces for your team.
                    </p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span>CMS, CRM and POS Systems</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Sales and Inventory Management</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Logistics and Team Management</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>E-Commerce and SaaS Systems</span></NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="f">
                <div className = 'header-list d-flex'>
                    <div className = 'col title  margin '><h1>Next Gen Technology</h1>
                    <div className = "bara"> &nbsp; </div>
                    </div>
                    <div className = "col icon" id="nextgen"><img src = {NextGen}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    We are emerging into the next generation technological advancement 
                    for better business insights, boost efficiency and allow businesses
                     to manage entire operations with our smart apps. With connected 
                     hardware and AI systems we can identify patterns, behaviour and
                      gain much better insights into business operations. Our Next Gen 
                      Tech apps provide seamless buying experience and help customers to
                       interact with products in both virtual and augmented reality 
                       environments. By connecting key processes we help businesses in 
                       boosting efficiency,
                     productivity, asset tracking and smarted business models.</p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span>AI, AR, VR and ML</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>I.O.T and Connected Hardware</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Intelligent Automation</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Robotics and Drone Tech</span></NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="g">
                <div className = 'header-list d-flex'>
                    <div className = 'col title'><h1>Growth  Digital Marketing</h1>
                    <div className = "bara"> &nbsp; </div>
                    </div>
                    <div className = "col icon"><img src = {Growth}/></div>
    
                </div>
                <div className = "body-list">
                    <p>
                    Innovative and smart growth marketing holds the key to attracting 
                    many clients, customers and generating leads. With the digital era 
                    and rapid growth of online activities, your business needs a productive 
                    and cost effective digital transformation to capitalise and resonate with
                     the young generation and traditional businesses. Troibits helps you 
                     attract your target audience online and successfully thrives your business
                     by creating tons of daily traffic with our growth marketing services and in converting leads to sales.</p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span>Digital Marketing Campaigns</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Media and Video Production</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Social Media Marketing and PR</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>PPC and Search Engine Marketing</span></NavLink>
                    </div>
                    <div className = "know">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
            <div className = {`list-item tab-content  py-3 px-3 px-sm-0 d-flex ${isPositionFixed && !isCarousel ? ` carou`: isStatic ? ` stat` : ``}`} id="h">
                <div className = 'header-list d-flex' id="software">
                    <div className = 'col title'><h1>Software Maintenance</h1>
                    <div className = "bara"></div>
                    </div>
                    <div className = "col icon"><img src = {maintainance}/></div>
    
                </div>
                <div className = "body-list" >
                    <p>
                    Our on demand application and software management services help in 
                    maintaining your enterprise software and apps and we consistently 
                    increase the efficiency of your systems. With the increasing number 
                    of customers and teams, the expectations for value addition and better
                     experience rise and requires more functionalities. We smartly manage 
                     your system upgrades, user interface changes, removal of outdated 
                     features, performance improvements and regular app 
                    update launches to boost your businesses growth and efficiency.</p>
                </div>
                <div className = "footer d-flex">
                    <div className ="d-flex nav">
                        <NavLink className = "nav-Link" to = "#"><span>Adaptive Enhancements</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Software Release Management</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Server Migration and Updates</span></NavLink>
                        <NavLink className = "nav-Link" to = "#"><span>Performance Improvements</span></NavLink>
                    </div>
                    <div className = "know" id="last">
                        <NavLink to={"#"}>Know more <i className="material-icons">keyboard_arrow_right</i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
}


export default ListItem;