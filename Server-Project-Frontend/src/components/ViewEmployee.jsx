import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";


class ViewEmployee extends Component {
  constructor(props) {
    super(props);
    // this.onChangeId = this.onChangeId.bind(this);
    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    // this.onChangeLastName = this.onChangeLastName.bind(this);
    // this.onChangeJob = this.onChangeJob.bind(this);
    // this.onChangeMgr = this.onChangeMgr.bind(this);
    // this.onChangeHiredate = this.onChangeHiredate.bind(this); 
    // this.onChangeSal = this.onChangeSal.bind(this);
    // this.onChangeComm = this.onChangeComm.bind(this);
    // this.onChangeDeptno = this.onChangeDeptno.bind(this);
    // this.getEmployee = this.getEmployee.bind(this);
    // this.updateEmployee = this.updateEmployee.bind(this);
    // this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = {
        id: this.props.match.params.id,
        employee: {}
    }

};
 
    componentDidMount() {
            EmployeeService.getEmployeeById(this.state.id).then( res => {
                this.setState({employee: res.data});
            })
        }


 
        // onChangeId (e) {
        //     const id = e.target.value;

        //     this.setState(function(prevState) {
        //         return {
        //             currentEmployee: {
        //             ...prevState.currentEmployee,
        //             id: id
        //             }
        //         };
        //     });
        // }

        // onChangeFirstName (e) {
        //     const firstName = e.target.value;

        //     this.setState(function(prevState) {
        //         return {
        //             currentEmployee: {
        //             ...prevState.currentEmployee,
        //          firstName: firstName
        //             }
        //         };
        //     });
        // }

        // onChangeLastName(e) {
        //     const lastName = e.target.value;
            
        //     this.setState(prevState => ({
        //     currentEmployee: {
        //         ...prevState.currentEmployee,
        //      lastName: lastName
        //     }
        //     }));
        // }

        // onChangeJob (e) {
        //     const job = e.target.value;

        //     this.setState(function(prevState) {
        //         return {
        //             currentEmployee: {
        //             ...prevState.currentEmployee,
        //          job: job
        //             }
        //         };
        //     });
        // }

        // onChangeMgr(e) {
        //     const mgr = e.target.value;
            
        //     this.setState(prevState => ({
        //     currentEmployee: {
        //         ...prevState.currentEmployee,
        //      mgr: mgr
        //     }
        //     }));
        // }

        // onChangeHiredate (e) {
        //     const hiredate = e.target.value;

        //     this.setState(function(prevState) {
        //         return {
        //             currentEmployee: {
        //             ...prevState.currentEmployee,
        //          hiredate: hiredate
        //             }
        //         };
        //     });
        // }

        // onChangeSal(e) {
        //     const sal = e.target.value;
            
        //     this.setState(prevState => ({
        //     currentEmployee: {
        //         ...prevState.currentEmployee,
        //      sal: sal
        //     }
        //     }));
        // }

        // onChangeComm (e) {
        //     const comm = e.target.value;

        //     this.setState(function(prevState) {
        //         return {
        //             currentEmployee: {
        //             ...prevState.currentEmployee,
        //          comm: comm
        //             }
        //         };
        //     });
        // }

        // onChangeDeptno(e) { 
        //     const deptno = e.target.value;
            
        //     this.setState(prevState => ({
        //     currentEmployee: {
        //         ...prevState.currentEmployee,
        //      deptno: deptno
        //     }
        //     }));
        // }

        // getEmployee(id) {
        //     EmployeeService.get(id)
        //     .then(response => {
        //         this.setState({
        //         currentEmployee: response.data
        //         });
        //         console.log(response.data);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        // }

        

            

        // updateEmployee() {
        //     EmployeeService.update(
        //     this.state.currentEmployee.id,
        //     this.state.currentEmployee
        //     )
        //     .then(response => {
        //         console.log(response.data);
        //         this.setState({
        //         message: "The Employee was updated successfully!"
        //         });
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        // }

        // deleteEmployee() {    
        //     EmployeeService.delete(this.state.currentEmployee.id)
        //     .then(response => {
        //         console.log(response.data);
        //         this.props.router.navigate('/employees');
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        // }

        render() {

            return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className= "row">
                        <label> First Name: </label>
                        <div> { this.state.employee.firstName }</div>
                    </div>
                    <div className= "row">
                        <label> Last Name: </label>
                        <div> { this.state.employee.lastName }</div>
                    </div>
                    <div className= "row">
                        <label> Job: </label>
                        <div> { this.state.employee.job }</div>
                    </div>
                    <div className= "row">
                        <label> Manager: </label>
                        <div> { this.state.employee.mgr }</div>
                    </div>
                    <div className= "row">
                        <label> Hire Date: </label>
                        <div> { this.state.employee.hiredate }</div>
                    </div>
                    <div className= "row">
                        <label> Salary: </label>
                        <div> { this.state.employee.sal }</div>
                    </div>
                    <div className= "row">
                        <label> Commission: </label>
                        <div> { this.state.employee.comm }</div>
                    </div>
                    <div className= "row">
                        <label> Department Number: </label>
                        <div> { this.state.employee.deptno }</div>
                    </div>
                </div>
                </div>
            </div>
                    
        );
    }
  
}

export default ViewEmployee;