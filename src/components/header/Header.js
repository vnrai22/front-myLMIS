import React, { Component } from 'react';
import {Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="nav-header">
                <h3>MyLIMS</h3>
                <ul className="nav-links">
                <Link to="/container">
                    <li>Container</li>
                </Link>
                <Link to="/sample">
                    <li>Sample</li>
                </Link>
                </ul>
            </nav>
         );
    }
}
 
export default Header;