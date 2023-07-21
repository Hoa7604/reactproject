import React from "react";
import "./Header.css";
import logo from '../../img/logo.png';
import * as FbIcons from 'react-icons/fa';
import * as TwIcons from 'react-icons/bs';
import * as InsIcons from 'react-icons/bs';
import MenuHeader from './MenuHeader';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

function Header (props) {
    console.log(props);
    return(
        <IconContext.Provider value={{color: '#ffffff'}}>
        <div className = "stHeader">
            <div className="contacts">
                <div className="in4-ct">
                    <p className="phone-ct">+953 012 3654 896</p>
                    <p className="mail-ct">support@colorlib.com </p>
                </div>
                <div className="social-media">
                    <ul className = "wrap-social-medial">
                        <li><Link onClick = {() => window.open('http://facebook.com')}><FbIcons.FaFacebookF/></Link></li>
                        <li><Link onClick = { () =>window.open('https://twitter.com/')}><TwIcons.BsTwitter/></Link></li>
                        <li><Link onClick = { () => window.open('https://www.instagram.com/')}><InsIcons.BsInstagram/></Link></li>
                    </ul>		
                </div>
            </div>
            <div className="logo-header">
                <Link to="/"><img src={logo} alt="logo header" /></Link>
                <MenuHeader/>
            </div>
            

        </div>
        </IconContext.Provider>
    ) 
}

export default Header;