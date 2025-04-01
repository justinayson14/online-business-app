package _5.group2.online_business_system;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeesRepository extends MongoRepository<Employees, ObjectId> {
    List<Employees> findEmployeesByNameContainingIgnoreCase(String name);

    void deleteByEmail(String employeeEmail);
}
