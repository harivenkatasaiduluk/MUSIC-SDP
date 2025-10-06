package com.example.musicappbackend.service;

import com.example.musicappbackend.entity.User;
import com.example.musicappbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Save user with plain password
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Validate user with plain password
    public User validateUser(String username, String rawPassword) {
        return userRepository.findByUsername(username)
                .filter(user -> user.getPassword().equals(rawPassword))
                .orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
