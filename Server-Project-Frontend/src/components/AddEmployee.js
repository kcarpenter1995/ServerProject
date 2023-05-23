import React from "react";
import EmployeeService from "../services/EmployeeService";

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeJob = this.onChangeJob.bind(this);
    this.onChangeMgr = this.onChangeMgr.bind(this);
    this.onChangeHiredate = this.onChangeHiredate.bind(this); 
    this.onChangeSal = this.onChangeSal.bind(this);
    this.onChangeComm = this.onChangeComm.bind(this);
    this.onChangeDeptno = this.onChangeDeptno.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.newEmployee = this.newEmployee.bind(this);

    this.state = {
      employeeId: null,
      firstName: "",
      lastName: "",
      job: "",
      mgr: null,
      hiredate: "",
      sal: null,
      comm: null,
      deptno: null,
      submitted: false
    }; 
  }

  onChangeEmployeeId(e) {
    this.setState({
      employeeId: e.target.value
    });
  }

  onChangeFirstName(e) { 
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangeJob(e) {
    this.setState({
      job: e.target.value
    });
  }

  onChangeMgr(e) {
    this.setState({
      mgr: e.target.value
    });
  }

  onChangeHiredate(e) {
    this.setState({
      hiredate: e.target.value
    });
  }

  onChangeSal(e) {
    this.setState({
      sal: e.target.value
    });
  }

  onChangeComm(e) {
    this.setState({
      comm: e.target.value
    });
  }

  onChangeDeptno(e) {
    this.setState({
      deptno: e.target.value
    });
  }

  saveEmployee() {
    var data = {
      employeeId: this.state.employeeId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      job: this.state.job,
      mgr: this.state.mgr,
      hiredate: this.state.hiredate,
      sal: this.state.sal,
      comm: this.state.comm,
      deptno: this.state.deptno
    };

    EmployeeService.create(data)
      .then(response => {
        this.setState({
          employeeId: response.data.employeeId,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          job: response.data.job,
          mgr: response.data.mgr,
          hiredate: response.data.hiredate,
          sal: response.data.sal,
          comm: response.data.comm,
          deptno: response.data.deptno,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEmployee() {
    this.setState({
      employeeId: null,
      firstName: "",
      lastName: "",
      job: "",
      mgr: null,
      hiredate: "",
      sal: null,
      comm: null,
      deptno: null,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newEmployee}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input
                type="text"
                className="form-control"
                id="employeeId"
                required
                value={this.state.employeeId}
                onChange={this.onChangeEmployeeId}
                name="employeeId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                name="lastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="job">Job</label>
              <input
                type="text"
                className="form-control"
                id="job"
                required
                value={this.state.job}
                onChange={this.onChangeJob}
                name="job"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mgr">Manager</label>
              <input
                type="text"
                className="form-control"
                id="mgr"
                required
                value={this.state.mgr}
                onChange={this.onChangeMgr}
                name="mgr"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hiredate">Hire Date</label>
              <input
                type="text"
                className="form-control"
                id="hiredate"
                required
                value={this.state.hiredate}
                onChange={this.onChangeHiredate}
                name="hiredate"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="sal">Salary</label>
              <input
                type="text"
                className="form-control"
                id="sal"
                required
                value={this.state.sal}
                onChange={this.onChangeSal}
                name="sal"
              />
            </div>

            <div className="form-group">
              <label htmlFor="comm">Commission</label>
              <input
                type="text"
                className="form-control"
                id="comm"
                required
                value={this.state.comm}
                onChange={this.onChangeComm}
                name="comm"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="deptno">Department</label>
              <input
                type="text"
                className="form-control"
                id="deptno"
                required
                value={this.state.deptno}
                onChange={this.onChangeDeptno}
                name="deptno"
              />
            </div>
            
            <button onClick={this.saveEmployee} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
  
}