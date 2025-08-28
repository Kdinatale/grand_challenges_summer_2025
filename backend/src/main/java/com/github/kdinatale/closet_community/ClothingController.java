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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


@Controller
public class ClothingController {
    public final ClothingItemService clothingItemService;
    final UploadService uploadService;

    public ClothingController(ClothingItemService clothingItemService, UploadService uploadService) {
        this.clothingItemService = clothingItemService;
        this.uploadService = uploadService;

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
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/postClothingItem/{userId}")
    @ResponseBody
    public void postClothingItem(@PathVariable String userId, @RequestParam("image") MultipartFile image, @RequestParam("caption") String caption) throws IOException {
        String clothingFolderName = "clothing-images";

        String fileExtension;
        switch(image.getContentType()) {
            case "image/jpeg":
                fileExtension = ".jpg";
                break;
            case "image/png":
                fileExtension = ".png";
                break;
            default:
                fileExtension = "";
        }
        
        ClothingItem item = new ClothingItem(ClothingType.DRESS, "pink", Size.LARGE, userId, caption);
        
        clothingItemService.addClothingItem(item);

        String objectName = clothingFolderName + "/" + userId+ "clothing_item" + item.getId() + fileExtension;

        uploadService.uploadImage(image, objectName);

        Photo newPhoto = new Photo("closet-community-bucket", objectName);
        
        item.setClothingItemPhoto(newPhoto);
        clothingItemService.saveClothingItem(item);
        
        
    }

}