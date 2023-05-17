package com.example.ServerProject.repository;

import com.example.ServerProject.models.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@EnableMongoRepositories
public interface EmployeeRepository extends MongoRepository<Employee, String> {

    List<Employee> findByEmployeeId(String id);
    Optional<Employee> findById(String id);






}
