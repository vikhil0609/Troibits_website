import React from 'react';
import {NavLink} from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import '../../assets/styles/services/footer.css';

function Footer (){
    return (
        <div className = "footer-component">
            <div className = "menu-footer-img">
                <img src = {logoImg}/>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Company</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Services</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Porfolio</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">Industries</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className = "menu-footer">
                <h3 className = "footer-menu-title">QuickLinks</h3>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum Dolor Sil</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
                <NavLink to = "#">Lorem Ipsum</NavLink>
            </div>
            <div className="notice top-tri tri-part">
                <div className="logo-bottom">
                    <img src = {logoImg}/>
                    <label className="label">Troibits</label>
                </div>
            </div>
        </div>
    )
}

export default Footer;
