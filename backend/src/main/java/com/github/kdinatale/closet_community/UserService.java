package com.github.kdinatale.closet_community;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
class UserService{
    private final UserRepository repository;
    
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    
    public User createUser(String firstName, String lastName, String email, String userName) {
        User user = new User(firstName, lastName, email, userName);
        repository.save(user);
        return user;
    }
    
    public Optional<User> getUserByUserName(String userName) {
        return repository.findByUserName(userName);
    }
    
    public Optional<User> getUserByUserId(String userId) {
        return repository.findById(userId);
    }
    
    public User getOrCreateUser(String userId) {
        Optional<User> user = repository.findById(userId);
        User userAccount;
        if(user.isEmpty()) {
            userAccount = createUser("", "", "", "");

        }
        else {
            userAccount = user.get(); 
        }
        return userAccount;
    }
    
}