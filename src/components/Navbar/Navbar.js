import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import logo from './bylogo.svg';

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <div className="navbar-logo"><img src={logo} width="100" height="50" />  <h1 className="head">Soil Salinity and Leach Management</h1></div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar