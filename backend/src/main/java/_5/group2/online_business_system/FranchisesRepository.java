package _5.group2.online_business_system;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FranchisesRepository extends MongoRepository<Franchises, ObjectId> {
    void deleteByStreetAddress(String streetAddress);
}
