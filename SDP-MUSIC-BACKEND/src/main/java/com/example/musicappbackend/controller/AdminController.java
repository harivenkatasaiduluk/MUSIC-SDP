package com.example.musicappbackend.controller;

import com.example.musicappbackend.entity.Admin;
import com.example.musicappbackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    // Get all admins
    @GetMapping("/all")
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    // Signup / Add new admin
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody Admin admin) {
        Optional<Admin> existingAdmin = adminRepository.findByUsername(admin.getUsername());
        if(existingAdmin.isPresent()){
            return ResponseEntity.badRequest().body("Username already exists");
        }

        // Save password as plain text
        admin.setPassword(admin.getPassword());
        adminRepository.save(admin);
        return ResponseEntity.ok("Admin registered successfully");
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admin admin) {
        Optional<Admin> existingAdmin = adminRepository.findByUsername(admin.getUsername());
        if(existingAdmin.isEmpty()){
            return ResponseEntity.badRequest().body("Invalid username");
        }

        Admin savedAdmin = existingAdmin.get();
        // Compare plain-text passwords
        if(savedAdmin.getPassword().equals(admin.getPassword())){
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.badRequest().body("Invalid password");
        }
    }

}
