import React, { Component } from 'react';
import withNavigateHook from './withNavigateHook';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }

    render() {
       

        return (
            <div >
                <footer className="footer">
                    <span className="text-muted">Created by Suwanda, May 2023 @ClinicProject</span>    
                </footer>
            </div>
        );
    }
}

//export default withNavigateHook(FooterComponent)
export default FooterComponent
