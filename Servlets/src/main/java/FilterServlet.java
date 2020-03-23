import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class FilterServlet implements Filter {

    @Override
    public void init(FilterConfig filterConfig) {

    }

    @Override
    public void doFilter (ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException{
        long start = System.currentTimeMillis();
        filterChain.doFilter(request, response);
        long end = System.currentTimeMillis();

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String path = httpRequest.getRequestURL().toString();
        String method = httpRequest.getMethod();

        System.out.println(String.format("%s — %s — %d ms", method, path, end - start));
    }

    @Override
    public void destroy(){

    }
}
