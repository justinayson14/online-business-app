package _5.group2.online_business_system;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
@Data // takes care of getters and setters
@AllArgsConstructor // for making constructors
@NoArgsConstructor // for constructors that doesn't take parameters
public class Products {
    @Id
    private ObjectId id;

    @NonNull
    @Indexed(unique = true)
    private String name;

    @NonNull
    private Double price;

    @NonNull
    private String image;

    public Products(@NonNull String name, @NonNull Double price, @NonNull String image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
