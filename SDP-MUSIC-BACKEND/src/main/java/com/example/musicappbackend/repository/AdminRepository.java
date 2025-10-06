package com.example.musicappbackend.repository;

import com.example.musicappbackend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByUsername(String username); // ← ee method declare cheyyali
}
