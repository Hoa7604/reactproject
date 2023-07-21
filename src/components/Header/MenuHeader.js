import React from 'react'
import {SidebarData} from './SidebarData'
import { Link } from 'react-router-dom';
import './MenuHeader.css'

function MenuHeader() {
  return (
    <div className='menu-header'>
        <ul className="wrap-menu">
            {
                SidebarData.map( (item , index) => {
                    return(
                        <li key={index} className={item.cName} >
                        <Link to={item.path}>
                            <p>{item.title}</p>
                        </Link>
                    </li>
                    )
                })
            }

        </ul>
    </div>
  )
}

export default MenuHeader
