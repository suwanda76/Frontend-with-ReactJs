import Navbar from './Navbar';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className='logo'>
                    HR Application
                </a>
                <Navbar/>
            </div>
        );
    }
}

export default Header;
