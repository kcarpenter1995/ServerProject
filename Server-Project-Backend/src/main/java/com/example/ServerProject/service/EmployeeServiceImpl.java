package com.example.ServerProject.service;

import com.example.ServerProject.models.Employee;
import com.example.ServerProject.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;



    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public  Employee findByEmployeeId(int id) {
        return employeeRepository.findByEmployeeId(id);
    }

//    @Override
//    public Employee findByLastName(String lname) {
//        return employeeRepository.findByLastName(lname);
//    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(int id) {
        employeeRepository.deleteById(String.valueOf(id));
    }
}
