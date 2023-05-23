import React, { Component } from "react";
import { withRouter } from "../common/with-router";
import EmployeeService from "../services/EmployeeService";


class Employee extends Component {
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
    this.getEmployee = this.getEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = {
    currentEmployee: {
        employeeId: "",
        firstName: "",
        lastName: "",
        job: "",
        mgr: 0,
        hiredate: "",
        sal: 0.0,
        comm: 0.0,
        deptno: 0
    },
        message: ""

    };
 }
    componentDidMount() {
            this.getEmployee(this.props.router.params.employeeId);
        }


 
        onChangeEmployeeId (e) {
            const employeeId = e.target.value;

            this.setState(function(prevState) {
                return {
                    currentEmployee: {
                    ...prevState.currentEmployee,
                    employeeId: employeeId
                    }
                };
            });
        }

        onChangeFirstName (e) {
            const firstName = e.target.value;

            this.setState(function(prevState) {
                return {
                    currentEmployee: {
                    ...prevState.currentEmployee,
                 firstName: firstName
                    }
                };
            });
        }

        onChangeLastName(e) {
            const lastName = e.target.value;
            
            this.setState(prevState => ({
            currentEmployee: {
                ...prevState.currentEmployee,
             lastName: lastName
            }
            }));
        }

        onChangeJob (e) {
            const job = e.target.value;

            this.setState(function(prevState) {
                return {
                    currentEmployee: {
                    ...prevState.currentEmployee,
                 job: job
                    }
                };
            });
        }

        onChangeMgr(e) {
            const mgr = e.target.value;
            
            this.setState(prevState => ({
            currentEmployee: {
                ...prevState.currentEmployee,
             mgr: mgr
            }
            }));
        }

        onChangeHiredate (e) {
            const hiredate = e.target.value;

            this.setState(function(prevState) {
                return {
                    currentEmployee: {
                    ...prevState.currentEmployee,
                 hiredate: hiredate
                    }
                };
            });
        }

        onChangeSal(e) {
            const sal = e.target.value;
            
            this.setState(prevState => ({
            currentEmployee: {
                ...prevState.currentEmployee,
             sal: sal
            }
            }));
        }

        onChangeComm (e) {
            const comm = e.target.value;

            this.setState(function(prevState) {
                return {
                    currentEmployee: {
                    ...prevState.currentEmployee,
                 comm: comm
                    }
                };
            });
        }

        onChangeDeptno(e) { 
            const deptno = e.target.value;
            
            this.setState(prevState => ({
            currentEmployee: {
                ...prevState.currentEmployee,
             deptno: deptno
            }
            }));
        }

        getEmployee(employeeId) {
            EmployeeService.get(employeeId)
            .then(response => {
                this.setState({
                currentEmployee: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        }

        

            

        updateEmployee() {
            EmployeeService.update(
            this.state.currentEmployee.employeeId,
            this.state.currentEmployee
            )
            .then(response => {
                console.log(response.data);
                this.setState({
                message: "The Employee was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
        }

        deleteEmployee() {    
            EmployeeService.delete(this.state.currentEmployee.employeeId)
            .then(response => {
                console.log(response.data);
                this.props.router.navigate('/employees');
            })
            .catch(e => {
                console.log(e);
            });
        }

        render() {
            const { currentEmployee } = this.state;

            return (
            <div>
                    {currentEmployee ? (
                    <div className="edit-form">
                        <h4>Employee</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="employeeId">Employee ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="employeeId"
                                    value={currentEmployee.employeeId}
                                    onChange={this.onChangeEmployeeId} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={currentEmployee.firstName}
                                    onChange={this.onChangeFirstName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={currentEmployee.lastName}
                                    onChange={this.onChangeLastName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="job">Job</label>
                                <input
                                type="text"
                                className="form-control"
                                id="job"
                                value={currentEmployee.job}
                                onChange={this.onChangeJob} />
                            </div>
                       
                            <div className="form-group">
                                <label htmlFor="mgr" >Manager</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id= "mgr"
                                    value={currentEmployee.mgr}
                                    onChange={this.onChangeMgr} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hiredate">Hire Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hiredate"
                                    value={currentEmployee.hiredate}
                                    onChange={this.onChangeHiredate} />
                            </div>
                            <div className="form-group">
                                <label htmlFor= "sal">Salary</label>
                                <input
                                type="text"
                                className="form-control"
                                id= "sal"
                                value={currentEmployee.sal}
                                onChange={this.onChangeSal} />
                            </div>
                            <div className="form-group">
                                <label htmlFor= "comm">Commission</label>
                                <input
                                type="text"
                                className="form-control"
                                id= "comm"
                                value={currentEmployee.comm}
                                onChange={this.onChangeComm} />
                            </div>
                            <div className="form-group">
                                <label htmlFor= "deptno">Department Number</label>
                                <input
                                type="text"
                                className="form-control"
                                id= "deptno"
                                value={currentEmployee.deptno}
                                onChange={this.onChangeDeptno} />
                            </div>

                    
                    </form>

                    <button
                    className="badge badge-danger mr-2"
                    onClick={this.deleteEmployee}
                    >
                    Delete
                    </button>

                    <button
                    type="submit"
                    className="badge badge-success"
                    onClick={this.updateEmployee}
                    >
                    Update
                    </button>

                    <button>
                        type="submit"
                        className="badge badge-success"
                        onClick={this.updateEmployee}
                    </button>
                </div>
                ) : (
                <div>
                    <br />
                    <p>Please click on a Employee...</p>
                </div>
                )}
            </div>
        );
    }
  
}

export default withRouter(Employee);