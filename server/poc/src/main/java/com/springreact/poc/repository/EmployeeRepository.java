package com.springreact.poc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.poc.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
    
}