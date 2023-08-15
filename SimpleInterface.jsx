import React, { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import CreateEmployeeComponent from './CreateEmployeeComponent';

class SimpleInterface extends Component {

    render() {
        return (
            <div style={{padding:20}}>
                <h2>About View</h2>
                <button onClick={handleClick1}> Click Me</button>
            </div>
        );
    }
}

function handleClick1 (e){
    
    e.preventDefault();
    console.log('The button was clicked');
    //let navigate= useNavigate();
      // return <CreateEmployeeComponent {...props} navigate={navigate} />
}

export default SimpleInterface;
