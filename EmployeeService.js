import axios from 'axios';
import DeleteEmployeeComponent from '../components/DeleteEmployeeComponent';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/employees";

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(id){
        console.log("Get Employee ID Employee Service called ID = " + id);
        return axios.get(EMPLOYEE_API_BASE_URL + '/' +  id);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/'+ employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+ '/'+ employeeId);
    }
}

export default new EmployeeService()