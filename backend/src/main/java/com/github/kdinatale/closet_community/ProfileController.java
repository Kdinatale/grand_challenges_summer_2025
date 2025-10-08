package com.github.kdinatale.closet_community;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
    @PostMapping("/uploadProfilePhoto/")
    @ResponseBody
    public void uploadProfilePhoto(@AuthenticationPrincipal Jwt jwt,
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
        Profile profile = profileService.getProfileByToken(jwt);
        String authId = jwt.getClaimAsString("sub");

        if(profile != null) {
            String objectName = profileFolderName + "/" + profile.getUserId() + "profile_photo" + fileExtension;

            uploadService.uploadImage(file, objectName);
    
            Photo newPhoto = new Photo("closet-community-bucket", objectName);
            profile.setProfilePhoto(newPhoto);
            profileService.saveProfile(profile);
        }
        else {
            User user = userService.getUserByAuthId(authId);
            System.out.println("OPTIONAL USER OBJECT: " + user);
            if(user == null) {
                System.out.println("User does not exist");
                //ERROR
            }
            else {
                System.out.println("User does exist"); 
                
                Profile newProfile = profileService.createProfile("", "", user.getId());
                
                String objectName = profileFolderName + "/" + newProfile.getUserId()+ "profile_photo" + fileExtension;
                
                uploadService.uploadImage(file, objectName);
        
                Photo newPhoto = new Photo("closet-community-bucket", objectName);
                newProfile.setProfilePhoto(newPhoto);
                profileService.saveProfile(newProfile);
                
            }
        }
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/getProfilePhoto/")
    @ResponseBody
    public String getPhoto(@AuthenticationPrincipal Jwt jwt) throws FileNotFoundException, IOException {
        
       Profile profile = profileService.getProfileByToken(jwt);
       System.out.println("Profile " + profile);
        
        if(profile != null) {
            System.out.println("Profile is present");
            System.out.println("Profile first name: " + profile.getFirstName());
            System.out.println("Profile last name: " + profile.getLastName());

            Photo profilePhoto = profile.getProfilePhoto();
            System.out.println("Profile Photo" + profilePhoto);
            if(profilePhoto != null) {
                URL signedUrl = profilePhoto.getSignedUrl();
                profile.get().setProfilePhoto(profilePhoto);
                profileService.saveProfile(profile.get());
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