package com.github.kdinatale.closet_community;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


@Controller
public class ProfileController {
    final UploadService uploadService;
    final ProfileService profileService;
    final UserService userService;
    final PhotoService photoService;
    
    public ProfileController(UploadService uploadService, ProfileService profileService, UserService userService, PhotoService photoService) {
        this.uploadService = uploadService;
        this.profileService = profileService;
        this.userService = userService;
        this.photoService = photoService;
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/uploadProfilePhoto/{userId}")
    @ResponseBody
    public void uploadProfilePhoto(@PathVariable String userId,
@RequestParam("file") MultipartFile file) throws IOException {
        String profileFolderName = "profile-photos";
        
        String fileExtension;
        switch(file.getContentType()) {
            case "image/jpeg":
                fileExtension = ".jpg";
                break;
            case "image/png":
                fileExtension = ".png";
                break;
            default:
                fileExtension = "";
        }
        
        Optional<Profile> profile = profileService.getProfileByUserId(userId);
        if(profile.isPresent()) {
            String objectName = profileFolderName + "/" + profile.get().getUserId() + "profile_photo" + fileExtension;

            uploadService.uploadImage(file, objectName);
    
            Photo newPhoto = new Photo("closet-community-bucket", objectName);
            profile.get().setProfilePhoto(newPhoto);
            profileService.saveProfile(profile.get());
        }
        else {
            Optional<User> user = userService.getUserByUserId(userId);
            System.out.println("OPTIONAL USER OBJECT: " + user);
            if(user.isEmpty()) {
                System.out.println("User does not exist");
                //ERROR
            }
            else {
                System.out.println("User does exist"); 
                
                Profile newProfile = profileService.createProfile(user.get().getFirstName(), user.get().getLastName(), userId);
                
                String objectName = profileFolderName + "/" + newProfile.getUserId()+ "profile_photo" + fileExtension;
                
                uploadService.uploadImage(file, objectName);
        
                Photo newPhoto = new Photo("closet-community-bucket", objectName);
                newProfile.setProfilePhoto(newPhoto);
                profileService.saveProfile(newProfile);
                
            }
        }
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getProfilePhoto/{userId}")
    @ResponseBody
    public String getPhoto(@PathVariable String userId) throws FileNotFoundException, IOException {
        Optional<Profile> profile = profileService.getProfileByUserId(userId);
        
        if(profile.isPresent()) {
            System.out.println("Profile is present");
            System.out.println("Profile first name: " + profile.get().getFirstName());
            System.out.println("Profile last name: " + profile.get().getLastName());

            Photo profilePhoto = profile.get().getProfilePhoto();
            System.out.println("Profile Photo" + profilePhoto);
            if(profilePhoto != null) {
                URL signedUrl = profilePhoto.getSignedUrl();
                System.out.println("SIGNED URL" + signedUrl);
                System.out.println(signedUrl.toString());
                return signedUrl.toString();

            }
            return "";

        }
        else {
            return null;
        }
    }
}