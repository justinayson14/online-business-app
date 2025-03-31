package _5.group2.online_business_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/customers")
@CrossOrigin(origins = "*")
public class CustomersController {
    @Autowired
    private CustomersService customersService;

    @PostMapping
    public ResponseEntity<Customers> createCustomer(@RequestBody Map<String, Object> payload) {
        Integer age = (Integer) payload.get("age");
        String name = (String) payload.get("name");
        return new ResponseEntity<Customers>(customersService.createCustomer(name, age), HttpStatus.CREATED);
    }
}
