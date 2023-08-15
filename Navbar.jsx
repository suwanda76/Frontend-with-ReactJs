import { menuItems } from "./menuItem"
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                 <nav>
            <ul className="menus">
              {menuItems.map((menu,index) => {
                return(
                    <li className="menu-items" key={index}>
                        <a href={menu.url}>menu.title</a>
                    </li>
                );
              }
              )}
            </ul>
        </nav>  
            </div>
        );
    }
}

export default Navbar;
