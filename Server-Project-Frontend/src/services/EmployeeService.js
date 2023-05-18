import http from "../http-common";

class EmployeeService {
    
    
    getAll() {
        return http.get("/employees");
    }

    get(employeeId) {
        return http.get(`/employees/${employeeId}`);
    }
    
    create(data) {
        return http.post("/employees", data);
    }
    
    update(employeeId, data) {
        return http.put(`/employees/${employeeId}`, data);
    }
    
    delete(employeeId) {
        return http.delete(`/employees/${employeeId}`);
    }      

    deleteAll() {
        return http.delete(`/employees`);
    }
}

export default new EmployeeService();