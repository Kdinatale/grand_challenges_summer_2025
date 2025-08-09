package com.github.kdinatale.closet_community;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@SpringBootApplication
@RestController
public class ClosetCommunityApplication {
	public static void main(String[] args) {
		SpringApplication.run(ClosetCommunityApplication.class, args);
	}
//	@GetMapping("/hello")
//	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
//	    return String.format("Hello %s!", name);
//	}


}

