import React, {useState} from 'react';
// import Nav from 'react-bootstrap/Nav';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import "./Navbar.css";
// import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar, setSideBar] = useState(false); //cái này là hook (tìm hiểu???)

    const showSidebar = () => (setSideBar(!sidebar)); //định nghĩa hàm showSidebar để mở, đóng menu.
    return (
        <>
        {/* <IconContext.Provider value={{color: '#ffffff'}}> */}
            <nav className={ sidebar ? 'nav-menu:active' : 'nav-menu' }> {/*đặt Điều Kiện cho active của menu.*/}
                <ul className='nav-menu-items' onClick = {showSidebar}>

                    { SidebarData.map((item, index) => { //duyệt mảng sidebar bằng hàm map()
                    return(
                        <li key={index} className={item.cName}>
                        <Link to={item.path} >
                            {item.icon}
                            <span>{item.title} </span>
                        </Link>
                    </li>
                ) 
                })}

                
                </ul>
            </nav>
            {/* </IconContext.Provider> */}
        </>
       
    )
}

export default Navbar;