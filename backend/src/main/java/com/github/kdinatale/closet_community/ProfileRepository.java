package com.github.kdinatale.closet_community;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {
    Optional<Profile> findByUserId(String userId);

}