package com.github.kdinatale.closet_community;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.TimeUnit;

import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

class Photo{
    private String bucketName;
    private String objectName;
    private URL photoUrl;
    private Instant expirationTime; 
    
    public Photo(String bucketName, String objectName) {
        this.bucketName = bucketName;
        this.objectName = objectName;
        this.photoUrl = null;
        this.expirationTime = null;
        
    }
    
    public void setBucketName(String bucketName) {
        this.bucketName = bucketName;
    }
    public void setObjectName(String objectName) {
        this.objectName = objectName;
    }
    
    public String getBucketName() {
        return this.bucketName;
    }
    public String getObjectName() {
        return this.objectName;
    }
    
    public void setPhotoUrl(URL photoUrl) {
        this.photoUrl = photoUrl;
    }
    
    public void setExpirationTime(Instant expirationTime) {
        this.expirationTime = expirationTime;
    }
    
    public void setExpirationTimeViaTimeGenerated(Instant timeGenerated) {
        this.expirationTime = timeGenerated.plus(90, ChronoUnit.MINUTES);
    }
    
    public URL getPhotoUrl() {
        return this.photoUrl;
    }
    
    public Instant getExpirationTime() {
        return this.expirationTime;
    }
    
    
    public URL getSignedUrl() throws FileNotFoundException, IOException {
        Instant now = Instant.now();
        

        if(getPhotoUrl() == null || getExpirationTime() == null ||  now.isAfter(expirationTime)) {
            
            Storage storage = StorageOptions.newBuilder()
                    .setCredentials(ServiceAccountCredentials.fromStream(new FileInputStream("src/main/resources/closet-community-key.json")))
                    .build()
                    .getService();
            
            BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, objectName).build();
            
            URL signedUrl = storage.signUrl(
                    blobInfo,
                    90,
                    TimeUnit.MINUTES,
                    Storage.SignUrlOption.withV4Signature()
            );
            
            setPhotoUrl(signedUrl);
            setExpirationTimeViaTimeGenerated(Instant.now());
    
            return signedUrl;
        }
        else {
            return this.photoUrl;
        }
    }
}