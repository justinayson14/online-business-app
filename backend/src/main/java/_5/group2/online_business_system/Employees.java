package _5.group2.online_business_system;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employees")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employees {
    @Id
    private ObjectId id;

    @NonNull
    private String name;

    @NonNull
    private Integer age;

    @NonNull
    @Indexed(unique = true)
    private String email;

    public Employees(@NonNull String name, @NonNull Integer age, @NonNull String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
