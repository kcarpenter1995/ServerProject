package com.example.ServerProject.repository;

import com.example.ServerProject.models.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

    Employee findByEmployeeId(int id);


}
