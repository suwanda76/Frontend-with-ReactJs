import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import withNavigateHook from './withNavigateHook';


class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
            
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        console.log("Add Employee called..!!");
        this.props.navigation("/add-employee");
    }

    
    editEmployee(id){
        console.log("update Employee called IS "+ id);
         this.props.navigation('/update-employee/'+ id); 
    }
   
    deleteEmployee(id){
        console.log("delete Employee called " + id);
        //rest api call
        EmployeeService.deleteEmployee(id).then(res=>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
     
    }

    viewEmployee(id){
        console.log("View Employee called " + id);
        this.props.navigation(`/view-employee/${id}`); 
        //rest api call
        //EmployeeService.deleteEmployee(id).then(res=>{
        //    this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        //});
     
    }

    render() {
        const myComponent = {
            overflow : 'scroll',  
            width : '100%',
            height: '400px'  
        }
      
        return (
            <div >
                <br></br>
                <h2 className="text-center">Employees List</h2>
                <br/>
                <div style={myComponent}>
                    <button type="button"  className="btn btn-primary btn-sm"  onClick={this.addEmployee}> Add Employee</button>                                 
                    <br/>
                    <div  className = "mt-2">
                        <table  className = "table table-striped table-bordered" >
                            <thead >
                                <tr>
                                    <th > Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Employee Department Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>{employee.departmentId}</td>
                                            <td>
                                            <button onClick={() => this.editEmployee(employee.id)}  
                                            className="btn btn-info" >Update</button>
                                            <button type="button"  
                                            className="btn btn-danger"  onClick={ () => this.deleteEmployee(employee.id)} 
                                            style= {{marginLeft: "10px"}}>Delete</button>
                                            <button type="button"  
                                            className="btn btn-info"  onClick={ () => this.viewEmployee(employee.id)} 
                                            style= {{marginLeft: "10px"}}>View</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        
                        </table>
                    </div>
                </div>    
            </div>
        );
    }
}

//const getEmpID =() =>{
    //const EmpId = null;
   // this.setState = ( {empID : id}
   // )
//    console.log("GET EMP ID IS "+ id);
    //this.props.navigation('/update-employee/${id}');       
    //this.props.navigation('/update-employee/${id}',id); 
    //EmpId = id//this.Employees.employee.id;
    // this.state.employees.map(
    //                      employee =>
     //                      <tr key = {employee.id}  EmpId = {(employee.id)} >
      //                     </tr>)
  //  return (UpdateEmployeeComponent.state.EmpId);
//}
//export default withNavigateHook(ListEmployeeComponent, getEmpID ) ;
export default withNavigateHook(ListEmployeeComponent) ;
