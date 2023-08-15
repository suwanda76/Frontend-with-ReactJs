import React, { Component } from 'react';
import withNavigateHook from './withNavigateHook';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div>
                <header >
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div href="https://detik.com" className = "navbar-brand">Employee Management application</div>
                        
                    </nav>
                </header>
            </div>
        );
    }
}

//export default withNavigateHook(HeaderComponent);
export default HeaderComponent;