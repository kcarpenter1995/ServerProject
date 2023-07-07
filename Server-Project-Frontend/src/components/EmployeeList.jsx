import React, {Component} from "react";
import EmployeeService from "../services/EmployeeService";



class EmployeeList extends Component {
  constructor(props) {
    super(props);


    this.state = {
      employees: [],
    }

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then(res => {
      this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      if(res.data === null) {
        this.props.history.push(`/add-employee/_add`);
      } 
        this.setState({ employees: res.data });
      });
  }

  addEmployee() {
    this.props.history.push(`/add-employee/_add`);
  }


  render() {

    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            

            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job</th>
                <th>Manager</th>
                <th>Hire Date</th>
                <th>Salary</th>
                <th>Commission</th>
                <th>Department Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(
                employee =>
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.job}</td>
                  <td>{employee.mgr}</td>
                  <td>{employee.hiredate}</td>
                  <td>{employee.sal}</td>
                  <td>{employee.comm}</td>
                  <td>{employee.deptno}</td>
                  <td>
                    <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                  </td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default EmployeeList;
