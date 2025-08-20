//package com.github.kdinatale.closet_community;
//
//import java.time.LocalDateTime;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//
//@Component
//public class ClothingItemSeeder implements CommandLineRunner {
//
//    private final ClothingItemService clothingItemService;
//
//    public ClothingItemSeeder(ClothingItemService clothingItemService) {
//        this.clothingItemService = clothingItemService;
//    }
//   
//
//    @Override
//    public void run(String ... args) {
//        ClothingItem item1 = new ClothingItem(ClothingType.SHIRT, "green", Size.MEDIUM, LocalDateTime.now(), "1");
//        clothingItemService.addClothingItem(item1);
//        System.out.println("Test clothing items.");
//    }
//}
