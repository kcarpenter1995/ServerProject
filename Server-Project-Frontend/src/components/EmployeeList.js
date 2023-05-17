import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const EmployeeList = () => {


  const [employees, setEmployee] = useState([]);

  useEffect(() => {

    getAllEmployees();
  }, [])


  const getAllEmployees = () => {
    EmployeeService.getAllEmployees().then((response) => {
        setEmployee(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }
  
  const deleteEmployee = (empno) => {
    EmployeeService.deleteEmployee(empno).then((response) =>{
     getAllEmployees();

    }).catch(error =>{
        console.log(error);
    })
     
  }

    const handleUpdate = async (values) => {
      console.log("empno:",values)
      try {
        await fetch(`employees/${values}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
          } 
        })
        .then(response => response.json())
        .then(data => console.log(data))
      }catch (error) {
        console.error(error);
      }
    }



    

    return (
      <div className="container">
        <h2 className="text-center"> Employee List</h2>
        <Link to ="/add-employee" className="btn btn-primary mb-2"> Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th> Employee Id </th>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Job </th>
              <th> Manager </th>
              <th> Hire Date </th>
              <th> Salary </th>
              <th> Commission </th>
              <th> Department Number </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(
                employee =>
                <tr key={employee.empno}>
                  <th>{employee.empno}</th>
                  <th>{employee.fname}</th>
                  <th>{employee.lname}</th>
                  <th>{employee.job}</th>
                  <th>{employee.mgr}</th>
                  <th>{employee.hiredate}</th>
                  <th>{employee.sal}</th>
                  <th>{employee.comm}</th>
                  <th>{employee.deptno}</th>
                  <th>
                    <Link className="btn btn-info" to = {`/edit-employee/${employee.empno} `} onClick={e => { handleUpdate(employee.empno)}} >Update</Link>
                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.empno)}
                    style = {{marginLeft:"10px"}}>Delete</button>
                  </th>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );

    
    
}

export default EmployeeList;