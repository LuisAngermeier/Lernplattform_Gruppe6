package dev.Gruppe6.Lernapp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "posts")
public class Post {
    @Id
    private String id;
    private String title;
    private String content;
    private String author;
    private LocalDateTime timestamp;
    private List<String> comments; // Assuming comment IDs are stored as Strings
    private List<FileDetail> files;

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public List<String> getComments() {
        return comments;
    }

    public void setComments(List<String> comments) {
        this.comments = comments;
    }

    public List<FileDetail> getFiles() {
        return files;
    }

    public void setFiles(List<FileDetail> files) {
        this.files = files;
    }

    public static class FileDetail {
        private String filename;
        private String filetype;
        private String url;

        // Getters and Setters

        public String getFilename() {
            return filename;
        }

        public void setFilename(String filename) {
            this.filename = filename;
        }

        public String getFiletype() {
            return filetype;
        }

        public void setFiletype(String filetype) {
            this.filetype = filetype;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }
    }
}
