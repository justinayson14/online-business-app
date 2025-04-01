package _5.group2.online_business_system;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "*")
public class ProductsController {
    @Autowired
    private ProductsService productsService;

    @GetMapping
    public ResponseEntity<List<Products>> getAllProducts() {
        return new ResponseEntity<List<Products>>(productsService.allProducts(), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Products>> getSingleProductByName(@RequestParam("name") String name) {
        return new ResponseEntity<List<Products>>(productsService.searchProductByName(name), HttpStatus.OK);
    }

    @DeleteMapping()
    public void deleteProductByName(@RequestParam("name") String productName) {
        productsService.deleteProductByName(productName);
    }

    @PostMapping
    public ResponseEntity<Products> createProduct(@RequestBody Map<String, Object> payload) {
        String name = (String) payload.get("name");
        Double price = (Double) payload.get("price");
        String image = (String) payload.get("image");
        return new ResponseEntity<Products>(productsService.createProduct(name, price, image), HttpStatus.CREATED);
    }
}
