package dev.Gruppe6.Lernapp;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
    // Custom query methods can be added here if needed
}
