import React, {Component}from "react";
import EmployeeService from "../services/EmployeeService";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeJob = this.onChangeJob.bind(this);
    this.onChangeMgr = this.onChangeMgr.bind(this);
    this.onChangeHiredate = this.onChangeHiredate.bind(this); 
    this.onChangeSal = this.onChangeSal.bind(this);
    this.onChangeComm = this.onChangeComm.bind(this);
    this.onChangeDeptno = this.onChangeDeptno.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      job: "",
      mgr: null,
      hiredate: "",
      sal: null,
      comm: null,
      deptno: null
    }; 
  }

  componentDidMount() {
    if (this.state.id === '_add') {
      return
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          job: employee.job,
          mgr: employee.mgr,
          hiredate: employee.hiredate,
          sal: employee.sal,
          comm: employee.comm,
          deptno: employee.deptno

        });
      });
    }
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

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName: this.state.firstName, lastName: this.state.lastName, job: this.state.job, mgr: this.state.mgr, hiredate: this.state.hiredate, sal: this.state.sal, comm: this.state.comm, deptno: this.state.deptno};
    console.log('employee => ' + JSON.stringify(employee));

    if (this.state.id === '_add') {
      EmployeeService.create(employee).then(res => {
        this.props.history.push('/employees')
      });
    } else {
      EmployeeService.update(employee, this.state.id).then(res => {
        this.props.history.push('/employees');
      });
    }
  }

  cancel() {
    this.props.history.push('/employees');
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Employee</h3>
    } else {
      return <h3 className="text-center">Update Employee</h3>
    }
  }

 
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
            {this.getTitle()}
              <div className="card-body">
          <form>

            <div className="form-group">
              <label> First Name: </label>
              <input
                placeholder="First Name"
                name="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
            </div>

            <div className="form-group">
              <label> Last Name: </label>
              <input
                placeholder="Last Name"
                name="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />
            </div>

            <div className="form-group">
              <label> Job: </label>
              <input
                placeholder="Job"
                name="job"
                className="form-control"
                value={this.state.job}
                onChange={this.onChangeJob}
              />
            </div>

            <div className="form-group">
              <label> Manager: </label>
              <input
                placeholder="Manager"
                name="mgr"
                className="form-control"
                value={this.state.mgr}
                onChange={this.onChangeMgr}
              />
            </div>

            <div className="form-group">
              <label> Hire Date: </label>
              <input
                placeholder="Hire Date"
                name="hiredate"
                className="form-control"
                value={this.state.hiredate}
                onChange={this.onChangeHiredate}
              />
            </div>

            <div className="form-group">
              <label> Salary: </label>
              <input
                placeholder="Salary"
                name="sal"
                className="form-control"
                value={this.state.sal}
                onChange={this.onChangeSal}
              />
            </div>

            <div className="form-group">
              <label> Commission: </label>
              <input
                placeholder="Commission"
                name="comm"
                className="form-control"
                value={this.state.comm}
                onChange={this.onChangeComm}
              />
            </div>

            <div className="form-group">
              <label> Department Number: </label>
              <input
                placeholder="Department Number"
                name="deptno"
                className="form-control"
                value={this.state.deptno}
                onChange={this.onChangeDeptno}
              />
            </div>

            <button className="btn btn-success" onClick={this.saveEmployee}>  
              Save
            </button>

            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>
              Cancel
            </button>

          </form>
        </div>

      </div>
      
      </div>
      </div>
      </div>
    )
  }
  
}

export default AddEmployee;