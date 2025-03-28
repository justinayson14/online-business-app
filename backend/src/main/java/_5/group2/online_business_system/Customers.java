package _5.group2.online_business_system;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNull;

@Document(collection = "customers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customers {
    @Id
    private ObjectId id;
    @NonNull
    private String name;
    @NonNull
    private Integer age;

    public Customers(String name, Integer age) {
        this.name = name;
        this.age = age;
    }
}
