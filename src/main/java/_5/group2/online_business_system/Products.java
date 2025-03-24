package _5.group2.online_business_system;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
@Data // takes care of getters and setters
@AllArgsConstructor // for making constructors
@NoArgsConstructor // for constructors that doesn't take parameters
public class Products {
    @Id
    private ObjectId id;

    private String name;

    private Double price;


}
