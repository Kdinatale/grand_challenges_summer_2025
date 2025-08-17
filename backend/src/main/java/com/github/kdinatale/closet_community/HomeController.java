package com.github.kdinatale.closet_community;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for the home page.
 */
@Controller
public class HomeController {
    @GetMapping("/")
    public String Index() {
        return "index";
    }
}