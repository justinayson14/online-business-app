package _5.group2.online_business_system;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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

/*    @GetMapping("/search")
    public ResponseEntity<Optional<Products>> getSingleProductById(@RequestParam("id") ObjectId id) {
        return new ResponseEntity<Optional<Products>>(productsService.singleProductById(id), HttpStatus.OK);
    }*/

    @GetMapping("/search")
    public ResponseEntity<Optional<Products>> getSingleProductByName(@RequestParam("name") String name) {
        return new ResponseEntity<Optional<Products>>(productsService.singleProductByName(name), HttpStatus.OK);
    }
}
