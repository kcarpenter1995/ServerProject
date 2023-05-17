/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import Employee from "./Employee";


const AddEmployee = () => {
  const [employee, setEmployee] = useState({});
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [job, setJob] = useState('');
  const [mgr, setMgr] = useState('');
  const [hiredate, setHiredate] = useState('');
  const [sal, setSal] = useState('');
  const [comm, setComm] = useState('');
  const [deptno, setDeptno] = useState('');
  const {empno}= useParams();
  useEffect(() => {

  });
  const history = useNavigate();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {fname, lname, job,mgr, hiredate, sal, comm, deptno}

    if(empno){
        EmployeeService.updateEmployee(empno, employee).then((response) => {
            history.push('/employees')
        }).catch(error => {
            console.log(error)
        })

    }else{
        EmployeeService.createEmployee(employee).then((response) =>{

            console.log(response.data)

            history.push('/employees');

        }).catch(error => {
            console.log(error)
        })
    }
    
  }

  useEffect(() => {
    // fetch((`http://localhost:8080/application/employees/${empno}`))
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setEmployee(data);
    //     const { fname, lname, job, mgr, hiredate, sal, comm, deptno } = data;
    //     setFname(fname);
    //     setLname(lname); 
    //     setJob(job); 
    //     setMgr(mgr); 
    //     setHiredate(hiredate); 
    //     setSal(sal); 
    //     setComm(comm); 
    //     setDeptno(deptno);  

          EmployeeService.getEmployeeById(empno).then((response) =>{
            setFname(response.data.fname)
            setLname(response.data.lastName)
            setJob(response.data.job); 
            setMgr(response.data.mgr); 
            setHiredate(response.data.hiredate); 
            setSal(response.data.sal); 
            setComm(response.data.comm); 
            setDeptno(response.data.deptno);  
          }).catch(error => {
            console.log(error)
          })
         
    }, [empno]);

  const title = () => {

    if(empno){
      return <h2 className="text-center"> Update Employee </h2>
    } else {
      return <h2 className="text-center"> Add Employee </h2>
    }
  }

 
  const initialValues = {
    empno: 0,
    fname: '',
    lname: '',
    job: '',
    mgr: 0,
    hiredate: '',
    sal: 0.0,
    comm: 0.0,
    deptno: 0
  };

  

  const validationSchema = yup.object().shape({
    empno: yup.number()
      .integer()
      .required('Empno is required'),
  fname: yup.string()
    .required('First name is required'),
  lname: yup.string()
    .required('Last name is required'),
  job: yup.string()
    .required('Job is required'),
  mgr: yup.number()
    .integer(),
  hiredate: yup.string()
    .required('Hire date is required'),
  sal: yup.number()
    .required('Salary is required')
    .positive('Salary must be a positive number'),
  comm: yup.number()
    .positive('Commission must be a positive number'),
  deptno: yup.number()
    .integer()
    .required('Department number is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm}) => {
    setSubmitting(true);

    try {
      const response = await fetch(`employees/${empno}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }, 
        body: JSON.stringify(values)
      });

      const data = await response.json();
      console.log(data);

      resetForm({});
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  }
 

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {
                  title()
                }
                

                    <div className="form-group mb-2">
                      
                        <Field
                            type = "text"
                            placeholder = "Enter first name"
                            name = "fname"
                            className = "form-control"
                        
                        />
                        
                        <Field
                            type = "text"
                            placeholder = "Enter last name"
                            name = "lname"
                            className = "form-control"
                          
                        />
                        <Field
                            type = "text"
                            placeholder = "Enter job"
                            name = "job"
                            className = "form-control"
                            
                        />
                        
                        <Field
                            type = "text"
                            placeholder = "Enter manager name"
                            name = "mgr"
                            className = "form-control"
                            
                        />
                        
                        <Field
                            type = "text"
                            placeholder = "Enter hiredate"
                            name = "hiredate"
                            className = "form-control"
                            
                        />
                        
                        <Field
                            type = "text"
                            placeholder = "Enter salary amount"
                            name = "sal"
                            className = "form-control"
                            
                        />
                        
                        <Field
                            type = "text"
                            placeholder = "Enter commission amount"
                            name = "comm"
                            className = "form-control"
                            
                        />
                        
                        <Field
                            type = "text"
                            placeholder = "Enter Department Number"
                            name = "deptno"
                            className = "form-control"
                            
                        />
                        
                    </div>
                      <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                      <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                  </Form>
        )}
       
                
                
    </Formik>
        
  )
  
}

export default AddEmployee