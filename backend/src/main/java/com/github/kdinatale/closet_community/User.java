package com.github.kdinatale.closet_community;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
class User{
    @Id
    private String id;
    private String authId;
    
    public User(String authId) {
        this.authId = authId;
    }

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