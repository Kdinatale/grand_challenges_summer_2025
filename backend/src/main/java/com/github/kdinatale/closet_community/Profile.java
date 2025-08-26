package com.github.kdinatale.closet_community;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "profiles")
class Profile{
   @Id
   private String id;
   private Photo profilePhoto;
   private String firstName;
   private String lastName;
   private String userId;


   public Profile(String firstName, String lastName, String userId) {
       this.profilePhoto = new Photo("closet-community-bucket", "profile-photos/default-photo.png");
       this.firstName = firstName;
       this.lastName = lastName;
       this.userId = userId;
   }
   
   public void setProfilePhoto(Photo profilePhoto) {
       this.profilePhoto = profilePhoto;
   }
   
   public Photo getProfilePhoto() {
       return this.profilePhoto;
   }
   
   public void setFirstName(String firstName) {
       this.firstName = firstName;
   }
   public String getFirstName() {
       return this.firstName;
   }
   public void setLastName(String lastName) {
       this.lastName = lastName;
   }
   public String getLastName() {
       return this.lastName;
   }

   public String getUserId() {
       return this.userId;
   }
   
   public void setUserId(String userId) {
       this.userId = userId;
   }
 
}