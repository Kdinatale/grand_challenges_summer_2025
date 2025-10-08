package com.github.kdinatale.closet_community;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Controller for the home page.
 */
@Controller
public class ClothingItemController {
    final ClothingItemService clothingService;
    final ProfileService profileService;
    
    public ClothingItemController(ClothingItemService clothingService, ProfileService profileService) {
        this.clothingService = clothingService;
        this.profileService = profileService;
        
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/clothingFeed")
    @ResponseBody
    public List<ClothingItem> getClothingFeed(@AuthenticationPrincipal Jwt jwt) {
        System.out.println("Get clothing feed");
        Profile profile = profileService.getProfileByToken(jwt);
        return clothingService.getItemsByUser(profile.getUserId());
    }
}