package dev.Gruppe6.Lernapp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection="Comments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    private ObjectId id;
    private String author;
    private String content;
    private Instant timestamp;

}
