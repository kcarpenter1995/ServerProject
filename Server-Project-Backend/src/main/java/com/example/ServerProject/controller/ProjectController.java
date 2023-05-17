package com.example.ServerProject.controller;

import com.example.ServerProject.models.Employee;
import com.example.ServerProject.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProjectController {
    //Employee Controller
    @Autowired
    EmployeeRepository employeeRepository;


    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(@RequestParam(required = true) String employeeId) {

        try {
            List<Employee> employees = new ArrayList<Employee>();

            if (employeeId == null) {
                employeeRepository.findAll().forEach(employees::add);
            } else {
                employeeRepository.findByEmployeeId(employeeId).forEach(employees::add);
            }

            if (employees.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(employees, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("employees/{employeeId}")
    public ResponseEntity<Employee> getEmployeeId(@PathVariable("employeeId") String employeeId) {

        Optional<Employee> employeeData = employeeRepository.findById(employeeId);

        if (employeeData.isPresent()) {
            return new ResponseEntity<>(employeeData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @PostMapping("/employees")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        try {
            Employee employeeRep = employeeRepository.save(new Employee(employee.getEmployeeId(), employee.getFname(), employee.getLname(), employee.getJob(), employee.getMgr(), employee.getHiredate(), employee.getSal(), employee.getComm(), employee.getDeptno()));
            return new ResponseEntity<>(employeeRep, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("employees/{employeeId}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("employeeId") String employeeId, @RequestBody Employee employee) {
        Optional<Employee> employeeData = employeeRepository.findById(employeeId);

        if (employeeData.isPresent()) {
            Employee employeeRep = employeeData.get();
            employeeRep.setEmployeeId(employee.getEmployeeId());
            employeeRep.setFname(employee.getFname());
            employeeRep.setLname(employee.getLname());
            employeeRep.setJob(employee.getJob());
            employeeRep.setMgr(employee.getMgr());
            employeeRep.setHiredate(employee.getHiredate());
            employeeRep.setSal(employee.getSal());
            employeeRep.setComm(employee.getComm());
            employeeRep.setDeptno(employee.getDeptno());
            return new ResponseEntity<>(employeeRepository.save(employeeRep), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/tutorials/{employeeId}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable("employeeId") String employeeId) {
        try {
            employeeRepository.deleteById(employeeId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllEmployees() {
        try {
            employeeRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
