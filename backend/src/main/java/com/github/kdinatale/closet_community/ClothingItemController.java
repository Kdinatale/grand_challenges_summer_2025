package com.github.kdinatale.closet_community;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Controller for the home page.
 */
@Controller
public class ClothingItemController {
    final ClothingItemService service;
    
    public ClothingItemController(ClothingItemService service) {
        this.service = service;
        
    }
    
    @GetMapping("/clothingFeed")
    @ResponseBody
    public List<ClothingItem> getClothingFeed() {
        return service.getItemsByTimeCreated();
    }
}