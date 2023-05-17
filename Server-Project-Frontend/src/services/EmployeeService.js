// import axios from "axios";

import axios from "axios";


const EMPLOYEE_REST_API_URL = "http://localhost:8080/application";

// class EmployeeService {

//     getEmployee() {
//         return axios.get(EMPLOYEE_REST_API_URL);
//     }
// }

class EmployeeService {
    
    
    getAllEmployees() {
        return axios.get(`${EMPLOYEE_REST_API_URL}/employees`);
    }

    getEmployeeById(empno) {
        return axios.get(`${EMPLOYEE_REST_API_URL}/employees/${empno}`);
    }
    
    createEmployee(employee) {
        return axios.post(`${EMPLOYEE_REST_API_URL}/employees/add`, employee);
    }
    
    updateEmployee(empno, employee) {
        return axios.put(`${EMPLOYEE_REST_API_URL}/employees/update/${empno}`, employee);
    }
    
    deleteEmployee(empno) {
        return axios.delete(`${EMPLOYEE_REST_API_URL}/employees/delete/${empno}`);
    }      
}

export default new EmployeeService();