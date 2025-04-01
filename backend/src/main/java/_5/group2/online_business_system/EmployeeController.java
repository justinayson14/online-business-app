package _5.group2.online_business_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeesService employeesService;

    @GetMapping
    public ResponseEntity<List<Employees>> getAllEmployees() {
        return new ResponseEntity<List<Employees>>(employeesService.allEmployees(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Employees>> getEmployeesByName(@RequestParam("name") String name) {
        return new ResponseEntity<List<Employees>>(employeesService.searchEmployeesByName(name), HttpStatus.OK);
    }

    @DeleteMapping()
    public void deleteEmployeeByEmail(@RequestParam("email") String employeeEmail) {
        employeesService.removeEmployee(employeeEmail);
    }

    @PostMapping()
    public ResponseEntity<Employees> createEmployees(@RequestBody Map<String, Object> payload) {
        Integer age = (Integer) payload.get("age");
        String name = (String) payload.get("name");
        String email = (String) payload.get("email");
        return new ResponseEntity<Employees>(employeesService.createEmployee(name, age, email), HttpStatus.CREATED);
    }
}
