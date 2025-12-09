package com.github.kdinatale.closet_community;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
class User{
    @Id
    private String id;
//    private String firstName;
//    private String lastName;
//    private String email;
//    private String userName;
    private String authId;
    
    public User(String authId) {
//        this.userName = userName;
        this.authId = authId;
    }
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//    
//    public String getUserName() {
//        return userName;
//    }
    public String getId() {
        return id;
    }
    
    public String getAuthId() {
        return authId;
    }
    public void setAuthId(String authId) {
        this.authId = authId;
    }
}