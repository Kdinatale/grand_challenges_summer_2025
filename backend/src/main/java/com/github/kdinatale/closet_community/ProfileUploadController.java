package com.github.kdinatale.closet_community;

import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 * Controller for the home page.
 */
@Controller
public class ProfileUploadController {
    final UploadService service;
    
    public ProfileUploadController(UploadService service) {
        this.service = service;
        
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/uploadProfilePhoto")
    @ResponseBody
    public String getClothingFeed(@RequestParam("file") MultipartFile file) throws IOException {
        return "TESTTTTT";
//                service.uploadImage(file, "test");
    }
}