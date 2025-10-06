import React, { useState, useRef, useEffect } from 'react';
import { usePlaylist } from './PlaylistContext';
import './SongItem.css';

const SongItem = ({ title, artist, rating, image, audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { addToPlaylist, customPlaylist, removeFromPlaylist } = usePlaylist(); // removeFromPlaylist add chesanu
  const [isAdded, setIsAdded] = useState(false); // New state for + button

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => console.log("Play error:", error));
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
    }
  }, [isPlaying]);

  useEffect(() => {
    // Check if song is already in playlist
    const existingSong = customPlaylist.find(s => s.title === title);
    setIsAdded(!!existingSong); // Update isAdded based on playlist
  }, [customPlaylist, title]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const handleAddToPlaylist = () => {
    const song = { title, artist, rating, image, audio };
    if (isAdded) {
      removeFromPlaylist(title); // Remove if already added
    } else {
      addToPlaylist(song); // Add if not added
    }
    setIsAdded(!isAdded); // Toggle state
  };

  return (
    <div className="song-item">
      <img src={image} alt={`${title} cover`} className="song-image" />
      <div className="song-info">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
      <span className="rating-star">{rating}</span>
      <button
        className="play-btn"
        onClick={togglePlay}
        disabled={!audio}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button
        className="add-btn"
        onClick={handleAddToPlaylist}
        disabled={!audio}
      >
        {isAdded ? '✔' : '+'} {/* Toggle between + and ✔ */}
      </button>
      <button className="download-btn" disabled>
        Download
      </button>
      <audio ref={audioRef} src={audio} />
    </div>
  );
};

export default SongItem;