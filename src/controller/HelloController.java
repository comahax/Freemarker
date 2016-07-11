package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/hello")
public class HelloController{
     @RequestMapping ("hello.do")
     public ModelAndView hello(){
    	   ModelAndView mv = new ModelAndView("hello");
           mv.addObject("title", "Spring MVC And Freemarker");
           mv.addObject("content", " Hello world ， test my first spring mvc ! ");
           return mv;
     }
}
