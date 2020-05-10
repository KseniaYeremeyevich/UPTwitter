import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TweetClass {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private List<String> hashTags;
    private List<String> likes;

    public TweetClass(String id, String description, Date createdAt, String author, String photoLink, List<String> hashTags, List<String> likes){
        this.id = id;
        this.description = description;
        this.createdAt = new Date(createdAt.getTime());
        this.author = author;
        this.photoLink = photoLink;
        this.hashTags = new ArrayList<>();
        this.likes = new ArrayList<>();
        this.hashTags.addAll(hashTags);
        this.likes.addAll(likes);
    }

    public String getId(){
        return this.id;
    }

    public String getDescription(){
        return this.description;
    }

    public Date getCreatedAt(){
        return this.createdAt;
    }

    public String getAuthor(){
        return this.author;
    }

    public String getPhotoLink(){
        return this.photoLink;
    }

    public List<String> getHashTags(){
        return this.hashTags;
    }

    public List<String> getLikes(){
        return this.likes;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setPhotoLink(String photoLink){
        this.photoLink = photoLink;
    }

    public void setHashTags(List<String> hashTags){
        this.hashTags = new ArrayList<>();
        this.hashTags.addAll(hashTags);
    }
}
