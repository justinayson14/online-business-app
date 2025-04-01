package _5.group2.online_business_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeesService {
    @Autowired
    private EmployeesRepository employeesRepository;

    public List<Employees> allEmployees() {return employeesRepository.findAll();}

    public List<Employees> searchEmployeesByName(String name) {
        if (name == null || name.trim().isEmpty())
            return employeesRepository.findAll();
        return employeesRepository.findEmployeesByNameContainingIgnoreCase(name);
    }

    public Employees createEmployee(String name, Integer age, String email) {
        Employees employee = new Employees(name, age, email);
        employeesRepository.insert(employee);
        return employee;
    }

    public void removeEmployee(String employeeEmail) {
        employeesRepository.deleteByEmail(employeeEmail);
    }
}
