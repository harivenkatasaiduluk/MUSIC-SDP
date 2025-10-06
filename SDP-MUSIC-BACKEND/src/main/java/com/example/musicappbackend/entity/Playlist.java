package com.example.musicappbackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Playlist {
    @Id
    @GeneratedValue
    private Long id;
    private Long userId;
    private String name;
    private String songsJson; // JSON string of songs

    // Getters and Setters
}