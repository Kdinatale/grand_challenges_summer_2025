package com.github.kdinatale.closet_community;


import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.google.auth.oauth2.ServiceAccountCredentials;

@Service
public class UploadService {
    @Value("${gcs.project-id}")
    String projectId;
    
    @Value("${gcs.bucket-name}")
    String bucketName;
  

  public void uploadImage(MultipartFile file, String objectName) throws IOException {
      ServiceAccountCredentials credentials = ServiceAccountCredentials.fromStream(new FileInputStream("src/main/resources/closet-community-key.json"));


      Storage storage = StorageOptions.newBuilder().setProjectId(this.projectId).setCredentials(credentials).build().getService();
      BlobId blobId = BlobId.of(this.bucketName, objectName);
      BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
    

      Storage.BlobWriteOption precondition;
      if (storage.get(this.bucketName, objectName) == null) {

        precondition = Storage.BlobWriteOption.doesNotExist();
      } else {
        precondition =
            Storage.BlobWriteOption.generationMatch(
                storage.get(this.bucketName, objectName).getGeneration());
      }
      
      Path tempFile = Files.createTempFile("upload-", "-" + file.getOriginalFilename());
      file.transferTo(tempFile.toFile());
      
      storage.createFrom(blobInfo, tempFile, precondition);
    
      Files.delete(tempFile);

  }
  


}