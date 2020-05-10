import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TweetListClass {
    private List<TweetClass> tweetClassList;
    private int currentId;

    TweetListClass(){
        this.tweetClassList = new ArrayList<>();
        this.currentId = 0;
    }

    TweetListClass(List<TweetClass> tweetClassList){
        this.tweetClassList = new ArrayList<>();
        this.tweetClassList.addAll(tweetClassList);
        this.currentId = this.tweetClassList.size();
    }

    TweetListClass(int twNum){
        List<String> newHashTags = new ArrayList<>();
        newHashTags.add("summer");
        newHashTags.add("sea");

        List<String> newLikes = new ArrayList<>();
        newLikes.add("April");
        newLikes.add("May");

        this.tweetClassList = new ArrayList<>();

        for (int i = 0; i < twNum; i++) {
            TweetClass oneTweet = new TweetClass(Integer.toString(i), "Tweet number " + i,new Date(),
                    "Ksenia","link", newHashTags, newLikes);
            this.tweetClassList.add(oneTweet);
        }
        this.currentId = this.tweetClassList.size();
    }

    public List<TweetClass> getTweetClassList(){
        return this.tweetClassList;
    }

    public TweetClass getTweet(String id) {
        for (TweetClass curTweet : tweetClassList){
            if(curTweet.getId().equals(id)){
                return curTweet;
            }
        }
        return null;
    }

    private static boolean validateProperty(TweetClass post, String property) {
        boolean flag = false;
        switch (property) {
            case "description":
                return (post.getDescription() != null) && (post.getDescription().length() < 280);
            case "photoLink":
                return (post.getPhotoLink() != null);
            case "hashTags":
                for(String hashTag : post.getHashTags()){
                    if((hashTag != null) && (hashTag.length() < 20)){
                        flag = true;
                    } else {
                        flag = false;
                        break;
                    }
                }
                return ((post.getHashTags() != null) && flag);
            default:
                return false;
        }
    }

    public static boolean validate(TweetClass post) {
        return TweetListClass.validateProperty(post, "description") &&
                TweetListClass.validateProperty(post, "photoLink") &&
                TweetListClass.validateProperty(post, "hashTags");
    }

    public boolean addTweet (TweetClass post) {
        Date date = new Date();
        int len = this.currentId;
        String id = Integer.toString(len);
        ArrayList<String> likes= new ArrayList<>();
        TweetClass newPost =new TweetClass(id, post.getDescription(), date, post.getAuthor(), post.getPhotoLink(), post.getHashTags(), likes);

        if(TweetListClass.validate(newPost)){
            this.tweetClassList.add(newPost);
            this.currentId = this.currentId + 1;
            return true;
        }
        return false;
    }

    public boolean editTweet(String id, TweetClass post) {
        TweetClass editPost = this.getTweet(id);
        boolean flag = false;


        if (post.getDescription() != null) {
            if (TweetListClass.validateProperty(post, "description")) {
                editPost.setDescription(post.getDescription());
                flag = true;
            }
        }

        if (post.getPhotoLink() != null) {
            if (TweetListClass.validateProperty(post, "photoLink")) {
                editPost.setPhotoLink(post.getPhotoLink());
                flag = true;
            }
        }

        if ((post.getHashTags() != null)) {
            if (TweetListClass.validateProperty(post, "hashTags")) {
                editPost.setHashTags(post.getHashTags());
                flag = true;
            }
        }

        return flag;
    }

    public boolean removeTweet(String id) {

        for (TweetClass curTweet : tweetClassList){
            if(curTweet.getId().equals(id)){
                this.tweetClassList.remove(Integer.parseInt(id));
                return true;
            }
        }
        return false;
    }

}
