package com.github.kdinatale.closet_community;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothingItemRepository extends MongoRepository<ClothingItem, String> {
    List<ClothingItem> findByColor(String color);
    List<ClothingItem> findBySize(Size size);
    List<ClothingItem> findByType(ClothingType type);
    List<ClothingItem> findByUserIdOrderByCreatedAtAsc(String userId);
    Optional<ClothingItem> findById(String id);
}