package com.github.kdinatale.closet_community;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
class ProfileService{
    private final ProfileRepository repository;
    private final UserService service;
    
    public ProfileService(ProfileRepository repository, UserService service) {
        this.repository = repository;
        this.service = service;
    }
    public void addProfile(Profile profile) {
        repository.save(profile);
    }
    
    public Profile getProfileByUserName(String userName) {
        Optional<User> user = service.getUserByUserName(userName);
        if(user.isEmpty()) {
            return null;
        }
        else {
            String userId = user.get().getId();
            Optional<Profile> profile = repository.findByUserId(userId);
            if(profile.isPresent()) {
                return profile.get();
            }
            else {
                return null;
            }
        }
    }
    
    public Optional<Profile> getProfileByUserId (String userId) {
        return repository.findByUserId(userId);


    }
    
    public void saveProfile(Profile profile) {
        repository.save(profile);
    }
    
    public Profile createProfile(String firstName, String lastName, String userId) {
        Profile profile = new Profile(null, firstName, lastName);
        repository.save(profile);
        return profile;
    }
    public URL getProfilePhotoUrl(String userId) throws FileNotFoundException, IOException {
        User user = service.getOrCreateUser(userId);
        Optional<Profile> profile = repository.findByUserId(userId);
        Profile userProfile;
        if(profile.isEmpty()) {
            userProfile = createProfile("", "", user.getId());
        }
        else {
            userProfile = profile.get();
        }
        
        Photo profilePhoto = userProfile.getProfilePhoto();
        return profilePhoto.getSignedUrl();
        
    }
    
}