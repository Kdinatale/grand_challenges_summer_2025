package com.github.kdinatale.closet_community;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByAuthId(String authId);
    Optional<User> findById(String id);
}