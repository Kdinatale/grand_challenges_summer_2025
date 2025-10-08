package com.github.kdinatale.closet_community;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.oauth2.jwt.JwtDecoder;

import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests((authorize) -> authorize
                        .requestMatchers("/getProfilePhoto/").authenticated()
//                    .requestMatchers("/api/public").permitAll()
//                    .requestMatchers("/api/private").authenticated()
//                    .requestMatchers("/api/private-scoped").hasAuthority("SCOPE_read:messages")
                )
                .cors(withDefaults())
                .oauth2ResourceServer(oauth2 -> oauth2
                    .jwt(withDefaults())
                )
                .build();
    }
}
