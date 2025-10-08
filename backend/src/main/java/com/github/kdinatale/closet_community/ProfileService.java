package com.github.kdinatale.closet_community;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.Optional;

import org.springframework.security.oauth2.jwt.Jwt;
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
    
    public Profile getProfileByToken(Jwt jwt) {
        System.out.println("GET PROFILE TOKEN");
        System.out.println("JWT " + jwt);
        
        String authId = jwt.getClaimAsString("sub");
        
        System.out.println("User Auth Id" + authId);
        
        User user = service.getUserByAuthId(authId);
        
        System.out.println("USER: " + user);
        if(user == null) {
            return null;
        }
        else {
            String userId = user.getId();
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
        Profile profile = new Profile(null);
        repository.save(profile);
        return profile;
    }
    public URL getProfilePhotoUrl(String authId) throws FileNotFoundException, IOException {
        User user = service.getUserByAuthId(authId);
        if(user == null){
            user = service.createUser(authId);
            
        }
        Optional<Profile> profile = repository.findByUserId(user.getId());
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