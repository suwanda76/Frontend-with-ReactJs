import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
//import { useParams } from 'react-router-dom';
import withNavigateHook from './withNavigateHook';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
         
            //id: this.props.match.params.id,
            id : props.params.id,
            firstName: "",
            lastName: "",
            emailId: "",
            departmentId: ""
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeDepartmentIdHandler = this.changeDepartmentIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
       console.log("COMPONENT MOUNT FROM UPDATE EMPLOYEE = " +this.props.params.id);

        EmployeeService.getEmployeeById(this.props.params.id).then( (res) =>{
        //EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
            lastName: employee.lastName,
            emailId: employee.emailId,
            departmentId: employee.departmentId
            }); 
            console.log("state id = " + this.state.id  );
        });
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

    changeDepartmentIdHandler = (myEvt)=>{
        this.setState({departmentId: myEvt.target.value});
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, 
                        lastName: this.state.lastName, 
                        emailId: this.state.emailId,
                        departmentId: this.state.departmentId};
        console.log('employee => ' + JSON.stringify(employee));
         console.log('PROPS.PARAMS.ID='+ this.props.params.id + "---- STATE ID = "+ this.state.id );   
        EmployeeService.updateEmployee(employee, this.props.params.id).then(res=>{
            this.props.navigation('/employees'); 
        })
    }

    cancel(){
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
                            <h3 className="text-center">Update Employee Details</h3>
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
                                    <div className="form-group">
                                        <label>Department Id:</label>
                                        <input placeholder="Departement Id" name="departmentId" className = "form-control" 
                                        value ={this.state.departmentId} onChange={this.changeDepartmentIdHandler} />
                                    </div>
                                    <br/>
                                    <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
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



//export default withNavigateHook(UpdateEmployeeComponent, 1);
export default withNavigateHook(UpdateEmployeeComponent);