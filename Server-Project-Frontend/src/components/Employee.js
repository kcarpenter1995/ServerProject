import React, { Component } from "react";
import { withRouter } from "../common/with-router";
import EmployeeService from "../services/EmployeeService";


class Employee extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.getEmployee = this.getEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

                this.state = {
                currentEmployee: {
                    empno: null,
                    fname: "",
                    lname: "",
                    job: "",
                    mgr: 0,
                    hiredate: "",
                    sal: 0.0,
                    comm: 0.0,
                    deptno: 0
                    }

                }
            }
        componentDidMount() {
            this.getEmployee(this.props.router.params.empno);
        }


 

        onChangeFirstName (e) {
            const fname = e.target.value;

            this.setState(function(prevState) {
                return {
                    currentEmployee: {
                    ...prevState.currentEmployee,
                    fname: fname
                    }
                };
            });
        }

        onChangeLastName(e) {
            const lname = e.target.value;
            
            this.setState(prevState => ({
            currentEmployee: {
                ...prevState.currentEmployee,
                lname: lname
            }
            }));
        }

        getEmployee(empno) {
            EmployeeService.getEmployee(empno)
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
            Employee.updateEmployee(
            this.state.currentEmployee.empno,
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
            Employee.deleteEmployee(this.state.currentEmployee.empno)
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
                        <label htmlFor="fname">First Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="fname"
                        value={currentEmployee.fname}
                        onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                        type="text"
                        className="form-control"
                        id="lname"
                        value={currentEmployee.lname}
                        onChange={this.onChangeLastName}
                        />
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