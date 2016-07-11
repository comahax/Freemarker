package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

/**
 * <p>Title: </p>
 *
 * <p>Description: </p>
 *
 * @author qsyang
 * @version 1.0
 */
public class HelloWordController implements Controller {

    @Override
    public ModelAndView handleRequest(HttpServletRequest hsr
            , HttpServletResponse hsr1) throws Exception {
        ModelAndView mv = new ModelAndView("hello");
        mv.addObject("title", "Spring MVC And Freemarker");
        mv.addObject("content", " Hello world ， test my first spring mvc ! ");
        return mv;
    }
}