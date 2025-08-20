package com.github.kdinatale.closet_community;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clothing_items")
class ClothingItem{
   @Id
   private String id;
   private ClothingType type;
   private String color;
   private Size size;
   private LocalDateTime createdAt;
   private String userId;

   public ClothingItem(ClothingType type, String color, Size size, LocalDateTime createdAt, String userId) {
       this.type = type;
       this.color = color;
       this.size = size;
       this.createdAt = createdAt;
       this.userId = userId;
   }
   public ClothingType getType() {
       return this.type;
   }
   public String getColor() {
       return this.color;
   }
   public Size getSize() {
       return this.size;
   }
   
   public LocalDateTime getTime() {
       return this.createdAt;
   }
   
   public String getUserId() {
       return this.userId;
   }
   public void setType(ClothingType type) {
      this.type = type;
   }
   public void setColor(String color) {
       this.color = color;
   }
   public void setSize(Size size) {
       this.size = size;
   }
   
   public void setTime(LocalDateTime createdAt) {
       this.createdAt = createdAt;
   }
   public void setUserId(String userId) {
       this.userId = userId;
   }
   
}