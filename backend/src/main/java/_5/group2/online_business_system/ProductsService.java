package _5.group2.online_business_system;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/***
 * Holds all methods to access database
 */
@Service
public class ProductsService {
    @Autowired // lets framework know to instantiate this class
    private ProductsRepository productsRepository;

    public List<Products> allProducts() {
        return productsRepository.findAll();
    }

    // Optional lets Java know it can return null (when id not found)
    public Optional<Products> singleProductById(ObjectId id) {
        return productsRepository.findById(id);
    }

    public List<Products> searchProductByName(String name) {
        if (name == null || name.trim().isEmpty())
            return productsRepository.findAll();
        return productsRepository.findProductsByNameContainingIgnoreCase(name);
    }

}
