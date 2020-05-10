import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.stream.Collectors;

public class Tweets extends HttpServlet {

    private TweetListClass tweets = new TweetListClass(5);

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String id = request.getParameter("id");

        response.setContentType("application/json");
        response.getOutputStream().println(gson.toJson(tweets.getTweet(id)));
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {

        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String id = request.getParameter("id");

        response.setContentType("application/json");
        response.getOutputStream().println(gson.toJson(tweets.removeTweet(id)));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        response.setContentType("application/json");
        String[] requestURI = request.getRequestURI().split("/");

        if (requestURI.length == 3 && requestURI[2].equals("search")) {
            response.getOutputStream().println(tweets.getTweetClassList().stream().map(gson::toJson).
                    collect(Collectors.joining("\n")));
        }
        else {
            TweetClass newTweet = gson.fromJson(request.getReader().readLine(), TweetClass.class);
            response.getOutputStream().println(tweets.addTweet(newTweet));
        }
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        response.setContentType("application/json");

        String id = request.getParameter("id");
        TweetClass newTweet = gson.fromJson(request.getReader().readLine(), TweetClass.class);

        response.getOutputStream().println(tweets.editTweet(id, newTweet));
    }



}


