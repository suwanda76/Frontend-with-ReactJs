import React, { Component } from 'react';

class CompanyHeaderComponent extends Component {
    render() {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-blue">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">New-Life Pte Ltd</a>
                    <div>
                        <a href="">HR</a>
                        <a href="" style= {{marginLeft: "10px"}} >Clinic</a>
                       </div>
                     </div>
                 <ul className='nav navbar-nav'>
                 <li><a href="#">Contact us</a></li>
                 </ul>    
                </div>
                </nav>                
        );
    }
}

export default CompanyHeaderComponent;