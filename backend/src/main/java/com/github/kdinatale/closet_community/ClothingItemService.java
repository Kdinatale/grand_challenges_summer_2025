package com.github.kdinatale.closet_community;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class ClothingItemService{
    private final ClothingItemRepository repository;
    
    public ClothingItemService(ClothingItemRepository repository) {
        this.repository = repository;
    }
    
//    public List<ClothingItem> getItemsByColor(String color){
//        return repository.findByColor(color);
//    }
//    
//    public List<ClothingItem> getItemsBySize(Size size){
//        return repository.findBySize(size);
//    }
//    
    public List<ClothingItem> getItemsByType(String userId, ClothingType type){
        return repository.findByUserIdAndTypeOrderByCreatedAtAsc(userId, type);
    }
    
    public List<ClothingItem> getItemsByUser(String userId){
        return repository.findByUserIdOrderByCreatedAtAsc(userId);
    }
    
    public ClothingItem getItemById(String clothingItemId) {
        return repository.findById(clothingItemId).get(); 
    }
//    
//    public List<ClothingItem> getItemsByTimeCreated(){
//        return repository.findAllByOrderByCreatedAtAsc();
//    }
//    
    public void addClothingItem(ClothingItem item) {
        repository.save(item);
    }
    public void deleteClothingItem(ClothingItem item) {
        repository.delete(item);
    }

    public void saveClothingItem(ClothingItem item) {
        repository.save(item);
        
    }
}