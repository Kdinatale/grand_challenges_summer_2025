package com.github.kdinatale.closet_community;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothingItemRepository extends MongoRepository<ClothingItem, String> {
    List<ClothingItem> findByUserIdAndTypeOrderByCreatedAtAsc(String userId, ClothingType type);
    List<ClothingItem> findByUserIdOrderByCreatedAtAsc(String userId);

    List<ClothingItem> findBySize(Size size);
    List<ClothingItem> findByType(ClothingType type);
    List<ClothingItem> findByUserIdOrderByCreatedAtAsc(String userId);
    Optional<ClothingItem> findById(String id);
}