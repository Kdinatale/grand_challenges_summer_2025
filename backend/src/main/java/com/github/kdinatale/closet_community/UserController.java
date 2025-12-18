package com.github.kdinatale.closet_community;

import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    final UserService userService;

    
    public UserController(UserService userService) {

        this.userService = userService;
    }
    
//    @CrossOrigin(origins = "http://localhost:5173")
//    @GetMapping("/getUserName/{userId}")
//    @ResponseBody
//    public String getUserName(@PathVariable String userId) {
//        Optional<User> user = userService.getUserByUserId(userId);
//        return user.get().getUserName();
//        
//    }
}