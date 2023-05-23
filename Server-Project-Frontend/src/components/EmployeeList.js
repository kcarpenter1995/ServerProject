import React from "react";import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

import E from "react-script";

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveEmployees = this.retrieveEmployees.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveEmployee = this.setActiveEmployee.bind(this);
    this.removeAllEmployees = this.removeAllEmployees.bind(this);
    this.searchName = this.searchName.bind(this);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);

    this.state = {
      employees: [],
      currentEmployee: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveEmployees();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveEmployees() {
    EmployeeService.getAll()
      .then(response => {
        this.setState({
          employees: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveEmployees();
    this.setState({
      currentEmployee: null,
      currentIndex: -1
    });
  }

  setActiveEmployee(employee, index) {
    this.setState({
      currentEmployee: employee,
      currentIndex: index
    });
  }

  removeAllEmployees() {
    EmployeeService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    EmployeeService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          employees: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, employees, currentEmployee, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by employee name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Employees List</h4>

          <ul className="list-group">
            {employees &&
              employees.map((employee, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveEmployee(employee, index)}
                  key={index}
                >
                  {employee.employeeId}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllEmployees}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentEmployee ? (
            <div>
              <h4>Employee</h4>
              <div>
                <label>
                  <strong>EmployeeId:</strong>
                </label>{" "}
                {currentEmployee.employeeId}
            </div>
            <div>
                <label>
                  <strong>First Name:</strong>
                </label>{" "}
                {currentEmployee.firstName}
            </div>
            <div>
                <label>
                  <strong>Last Name:</strong>
                </label>{" "}
                {currentEmployee.lastName}
            </div>
            <div>
                <label>
                  <strong>Job:</strong>
                </label>{" "}
                {currentEmployee.job}
            </div>
            <div>
                <label>
                  <strong>Manager:</strong>
                </label>{" "}
                {currentEmployee.mgr}
            </div>
            <div>
                <label>
                  <strong>Hire Date:</strong>
                </label>{" "}
                {currentEmployee.hireDate}
            </div>
            <div>
                <label>
                  <strong>Salary:</strong>
                </label>{" "}
                {currentEmployee.sal}
            </div>
            <div>
                <label>
                  <strong>Commission:</strong>
                </label>{" "}
                {currentEmployee.comm}
            </div>
            <div>
                <label>
                  <strong>Department:</strong>
                </label>{" "}
                {currentEmployee.deptno}
            </div>
              <Link
                to={"/employees/" + currentEmployee.employeeId}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on an Employee...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
