package com.github.kdinatale.closet_community;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
class PhotoService{
    private final PhotoRepository photoRepository;
    
    public PhotoService(PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }
    
    public Photo getPhoto(String objectName) {
        Optional<Photo> photo = photoRepository.findByObjectName(objectName);
        if(photo.isPresent()) {
            return photo.get();
        }
        else {
            return null;
        }
    }
}