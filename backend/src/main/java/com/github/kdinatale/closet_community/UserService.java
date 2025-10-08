package com.github.kdinatale.closet_community;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
class UserService{
    private final UserRepository repository;
    
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    
    public User createUser(String authId) {
        User user = new User(authId);
        repository.save(user);
        return user;
    }
    
    public User getUserById(String userId) {
        Optional<User> user = repository.findById(userId);
        User userAccount;
        if(user.isEmpty()) {
            return null;
        }
        else {
            userAccount = user.get(); 
        }
        return userAccount;
    }
    
    public User getUserByAuthId(String authId) {
        Optional<User> user = repository.findByAuthId(authId);
        User userAccount;
        if(user.isEmpty()) {
            return null;
        }
        else {
            userAccount = user.get(); 
        }
        return userAccount;
    }
    
}