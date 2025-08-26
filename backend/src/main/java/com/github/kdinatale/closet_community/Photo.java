package com.github.kdinatale.closet_community;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

class Photo{
    private String bucketName;
    private String objectName;
    
    public Photo(String bucketName, String objectName) {
        this.bucketName = bucketName;
        this.objectName = objectName;
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
    
    public URL getSignedUrl() throws FileNotFoundException, IOException {
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

        return signedUrl;
    }
}