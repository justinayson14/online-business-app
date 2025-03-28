package _5.group2.online_business_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomersService {
    @Autowired
    private CustomersRepository customersRepository;

    public Customers createCustomer(String name, Integer age) {
        Customers customer = new Customers(name, age);
        customersRepository.insert(customer);
        return customer;
    }
}
