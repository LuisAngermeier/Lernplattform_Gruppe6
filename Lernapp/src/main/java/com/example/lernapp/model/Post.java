package com.example.lernapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Document(collection = "Posts")
public class Post {
    @Id
    private String id;
    private String title;
    private String content;
    private String author;
    private Instant timestamp; // Use Instant for timestamps
    private String fach; // Field for subject or category
    private List<String> comments; // List of comment IDs
    private List<File> files; // List of files

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public Instant getTimestamp() { return timestamp; }
    public void setTimestamp(Instant timestamp) { this.timestamp = timestamp; }

    public String getFach() { return fach; }
    public void setFach(String fach) { this.fach = fach; }

    public List<String> getComments() { return comments; }
    public void setComments(List<String> comments) { this.comments = comments; }

    public List<File> getFiles() { return files; }
    public void setFiles(List<File> files) { this.files = files; }

    // Inner class for files
    public static class File {
        private String filename;
        private String filetype;
        private String url;

        // Getters and Setters
        public String getFilename() { return filename; }
        public void setFilename(String filename) { this.filename = filename; }

        public String getFiletype() { return filetype; }
        public void setFiletype(String filetype) { this.filetype = filetype; }

        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }
}
