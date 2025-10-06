package com.example.musicappbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors() // Enable CORS
            .and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/signup", "/api/login").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin().disable()  // 🔑 Disable form login if you are using frontend login
            .httpBasic().disable(); // 🔑 Disable HTTP Basic → popup stop

        return http.build();
    }
}
