package _5.group2.online_business_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/franchises")
@CrossOrigin(origins = "*")
public class FranchisesController {
    @Autowired
    private FranchisesService franchisesService;

    @GetMapping
    public ResponseEntity<List<Franchises>> getAllFranchises() {
        return new ResponseEntity<List<Franchises>>(franchisesService.allFranchises(), HttpStatus.OK);
    }

    @DeleteMapping()
    public void deleteFranchiseByStreetAddress(@RequestParam("street_address") String streetAddress) {
        franchisesService.removeFranchise(streetAddress);
    }

    @PostMapping()
    public ResponseEntity<Franchises> createFranchise(@RequestBody Map<String, String> payload) {
        String name = (String) payload.get("name");
        String streetAddress = (String) payload.get("street_address");
        String cityState = (String) payload.get("city_state");
        String zipCode = (String) payload.get("zipcode");
        String image = (String) payload.get("image");
        return new ResponseEntity<Franchises>(franchisesService.createFranchise(image, streetAddress, cityState, zipCode, name), HttpStatus.CREATED);
    }
}
