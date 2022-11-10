package com.springreact.poc.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.springreact.poc.model.Employee;
import com.springreact.poc.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/api/v1")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepo;

    // Fetch all employees
    @RequestMapping("/employeess")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        System.out.println("inside get employees");
        List<Employee> lst = employeeRepo.findAll();
        for (Employee employee : lst) {
            System.out.println(employee.getId()+":"+employee.getFirst_name());
        }
        return new ResponseEntity<>(lst, HttpStatus.OK);
        // return employeeRepo.findAll();
    }

    // Add new employee to database
    @RequestMapping(value="/employees", method = RequestMethod.POST)
    public ResponseEntity<?> createEmployee(@RequestBody Employee emp){
        Employee e = employeeRepo.save(emp);
        System.out.println(emp.getFirst_name());
        if( e != null){
            System.out.println("inside if condition");
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else{
            System.out.println("inside else condition");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } 
            
    }

    //get employee by id
    @RequestMapping(value="/employees/{id}", method = RequestMethod.GET)
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Optional<Employee> employee = employeeRepo.findById(id);
        employee.orElseThrow(() -> new RuntimeException("Employee Not found"));
        return new ResponseEntity<>(employee.get(), HttpStatus.OK);
        // return ResponseEntity.ok(employee.get());
    }

    //delete employee by id
    @RequestMapping(value="/employees/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        Optional<Employee> emp = employeeRepo.findById(id);
        if(!emp.isPresent())
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        employeeRepo.delete(emp.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
