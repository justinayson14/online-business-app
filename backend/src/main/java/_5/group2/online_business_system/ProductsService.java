package _5.group2.online_business_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<Products> searchProductsByName(String name) {
        if (name == null || name.trim().isEmpty())
            return productsRepository.findAll();
        return productsRepository.findProductsByNameContainingIgnoreCase(name);
    }

    public void deleteProductByName(String name) {
        productsRepository.deleteByName(name);
    }

    public Products createProduct(String name, Double price, String image) {
        Products product = new Products(name, price, image);
        productsRepository.insert(product);
        return product;
    }

}
