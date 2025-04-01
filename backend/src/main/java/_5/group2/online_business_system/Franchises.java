package _5.group2.online_business_system;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "franchises")
@AllArgsConstructor
@NoArgsConstructor
public class Franchises {
    @Id
    private ObjectId id;

    @NonNull
    @Indexed(unique = true)
    @Field("street_address")
    private String streetAddress;

    @NonNull
    @Field("city_state")
    private String cityState;

    @NonNull
    @Field("zipcode")
    private String zipCode;

    @NonNull
    private String name;

    private String image;

    public Franchises(@NonNull String streetAddress, @NonNull String cityState, @NonNull String zipCode, @NonNull String name, String image) {
        this.streetAddress = streetAddress;
        this.cityState = cityState;
        this.zipCode = zipCode;
        this.name = name;
        this.image = image;
    }
}
