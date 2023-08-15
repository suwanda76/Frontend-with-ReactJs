import React, { Component } from 'react';
import withNavigateHook from './withNavigateHook';
import EmployeeService from '../services/EmployeeService';

class DeleteEmployeeComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler = (myEvt) =>{
        this.setState({firstName: myEvt.target.value});
    }

    changeLastNameHandler = (myEvt) => {
        this.setState({lastName: myEvt.target.value});
    }

    changeEmailIdHandler = (myEvt) => {
        this.setState({emailId: myEvt.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res=>{
           // this.props.history.push('/employees');
           this.props.navigation('/employees');
        });
    }

    cancel(){
       //this.props.history.push('/employees');
       console.log("Cancel Employee Creation..");
       this.props.navigation('/employees');
    }

    render() {
        return (
            
            <div>
                  <br/>
                <div className = "container">
                    <div className = "row">
                        <div className="card col-md-6 offset-md3 offset-md-3">
                        <br/>
                            <h3 className="text-center">Add New Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className = "form-control" 
                                        value ={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className = "form-control" 
                                        value ={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id:</label>
                                        <input placeholder="Email Id" name="emailId" className = "form-control" 
                                        value ={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <br/>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style= {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withNavigateHook(DeleteEmployeeComponent);