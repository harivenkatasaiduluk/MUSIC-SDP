package com.example.musicappbackend.repository;

import com.example.musicappbackend.entity.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
}