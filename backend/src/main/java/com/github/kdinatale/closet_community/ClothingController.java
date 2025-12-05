package com.github.kdinatale.closet_community;

import java.io.FileNotFoundException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

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
    final ProfileService profileService;

    public ClothingController(ClothingItemService clothingItemService, UploadService uploadService, ProfileService profileService) {
        this.clothingItemService = clothingItemService;
        this.uploadService = uploadService;
        this.profileService = profileService;

    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getClothingItemsOrderedByTime/")
    @ResponseBody
    public List<Map<String, Object>> getClothingItemsOrderedByTime(@AuthenticationPrincipal Jwt jwt) throws FileNotFoundException, IOException {
        Profile profile = profileService.getProfileByToken(jwt);        
        
        List<ClothingItem> clothingItems = clothingItemService.getItemsByUser(profile.getUserId());
        List<Map<String, Object>> itemUrls = new ArrayList<>();
        for(int i = 0; i < clothingItems.size(); i++) {
            ClothingItem item = clothingItems.get(i);
            Map<String, Object> itemMap = new HashMap<>();
            itemMap.put("id", item.getId());
            itemMap.put("itemUrl", item.getClothingItemPhoto().getSignedUrl().toString());
            itemUrls.add(itemMap);
        }
        return itemUrls;
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getClothingItem/{clothingItemId}")
    @ResponseBody
    public ClothingItem getClothingItemMetaData(@PathVariable String clothingItemId) {
        return clothingItemService.getItemById(clothingItemId);
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/postClothingItem/")
    @ResponseBody
    public void postClothingItem(@AuthenticationPrincipal Jwt jwt, @RequestParam("image") MultipartFile image, @RequestParam("caption") String caption) throws IOException {
        Profile profile = profileService.getProfileByToken(jwt);
        String userId = profile.getUserId();

        
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