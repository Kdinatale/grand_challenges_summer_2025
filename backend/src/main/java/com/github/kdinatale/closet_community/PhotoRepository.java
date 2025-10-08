package com.github.kdinatale.closet_community;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends MongoRepository<Photo, String> {
    Optional<Photo> findByObjectName(String objectName);

}