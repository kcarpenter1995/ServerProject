package com.example.ServerProject.service;

import com.example.ServerProject.models.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    Employee findByEmployeeId(int id);

//    Employee findByLastName(String lname);


    Employee saveEmployee(Employee employee);



    void deleteEmployee(int id);
}
