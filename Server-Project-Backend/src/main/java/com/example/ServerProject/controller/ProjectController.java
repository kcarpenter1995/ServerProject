package com.example.ServerProject.controller;

import com.example.ServerProject.dto.EmployeeDTO;
import com.example.ServerProject.models.Employee;
import com.example.ServerProject.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.ServerProject.util.ObjectMapperUtils;
import org.springframework.data.domain.Pageable;


import java.util.List;


@RestController
@RequestMapping("/application")
public class ProjectController {
    //Employee Controller
    @Autowired
    EmployeeService employeeService;


    @GetMapping("/employees")
    public List<EmployeeDTO> employeeList() {
        return ObjectMapperUtils.mapAll(employeeService.findAll(), EmployeeDTO.class);
    }

    @GetMapping("employees/{id}")
    public EmployeeDTO getEmployeeId(@PathVariable("id") int id) {
        return ObjectMapperUtils.map(employeeService.findByEmployeeId(id), EmployeeDTO.class);

    }

    @PostMapping("/employees/add")
    public ResponseEntity<?> saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
        employeeService.saveEmployee(ObjectMapperUtils.map(employeeDTO, Employee.class));
        return new ResponseEntity<>("Employee added successfully", HttpStatus.OK);
    }

//    @PutMapping("employees/update/{empno}")
//    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee, @PathVariable int empno) {
//        try {
//            Employee existEmployee = employeeService.getEmployee(empno);
//            employee.setEmpno(empno);
//            employeeService.saveEmployee(employee);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (NoSuchElementException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @DeleteMapping("employees/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") int id) {
        employeeService.deleteEmployee(employeeService.findByEmployeeId(id).getId());
        return new ResponseEntity<>("Employee deleted successfully", HttpStatus.OK);
    }







    //Department Controller

//    @Autowired
//    DepartmentService departmentService;
//
//    @GetMapping("/departments")
//    public List<Department> departmentList() {
//        return departmentService.listAllDepartments();
//    }
//
//    @GetMapping("departments/{deptno}")
//    public ResponseEntity<Department> getDepartments(@PathVariable int deptno) {
//        try {
//            Department department = departmentService.getDepartment(deptno);
//            return new ResponseEntity<Department>(department, HttpStatus.OK);
//        } catch (NoSuchElementException e) {
//            return new ResponseEntity<Department>(HttpStatus.NOT_FOUND);
//        }
//
//    }
//
//    @PostMapping("/departments/add")
//    public void addDepartment(@RequestBody Department department) {
//        departmentService.saveDepartment(department);
//    }
//
//    @PutMapping("departments/update/{deptno}")
//    public ResponseEntity<Department> updateDepartment(@RequestBody Department department, @PathVariable int deptno) {
//        try {
//            Department existDepartment = departmentService.getDepartment(deptno);
//            department.setDeptno(deptno);
//            departmentService.saveDepartment(department);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (NoSuchElementException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @DeleteMapping("department/delete/{empno}")
//    public void deleteDepartment(@PathVariable int deptno) {
//        departmentService.deleteDepartment(deptno);
//    }
}
