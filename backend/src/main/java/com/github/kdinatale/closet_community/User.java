package com.github.kdinatale.closet_community;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
class User{
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String userName;
    
    public User(String firstName, String lastName, String email, String userName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.userName = userName;

    }
    public String getFirstName() {
        return this.firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return this.lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail(String email) {
        return this.email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    
    public String getUserName() {
        return userName;
    }
    public String getId() {
        return id;
    }
}