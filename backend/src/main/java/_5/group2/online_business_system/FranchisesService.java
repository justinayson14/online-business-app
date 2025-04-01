package _5.group2.online_business_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FranchisesService {
    @Autowired
    private FranchisesRepository franchisesRepository;

    public List<Franchises> allFranchises() {return franchisesRepository.findAll();}

    public Franchises createFranchise(String name, String streetAddress, String cityState, String zipCode, String image) {
        Franchises franchise = new Franchises(streetAddress, cityState, zipCode, image, name);
        franchisesRepository.insert(franchise);
        return franchise;
    }

    public void removeFranchise(String streetAddress) {
        franchisesRepository.deleteByStreetAddress(streetAddress);
    }
}
