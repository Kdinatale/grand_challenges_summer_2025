package com.github.kdinatale.closet_community;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class ClothingController {
    public final ClothingItemService clothingItemService;
    
    public ClothingController(ClothingItemService clothingItemService) {
        this.clothingItemService = clothingItemService;
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getClothingItemsOrderedByTime/{userId}")
    @ResponseBody
    public List<String> getClothingItemsOrderedByTime(@PathVariable String userId) throws FileNotFoundException, IOException {
        List<ClothingItem> clothingItems = clothingItemService.getItemsByTimeCreated(userId);
        List<String> itemUrls = new ArrayList<>();
        for(int i = 0; i < clothingItems.size(); i++) {
            
            itemUrls.add(clothingItems.get(i).getClothingItemPhoto().getSignedUrl().toString());
        }
        return itemUrls;
    }

}