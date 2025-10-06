import React from 'react';
import './SongCard.css';

function SongCard({ song, onAddToPlaylist }) {
  return (
    <div className="song-card">
      <div>
        <h3>{song.title}</h3>
        <p>{song.artist} • {song.album} • {song.genre}</p>
      </div>
      <button
        onClick={() => onAddToPlaylist(song)}
        aria-label={`Add ${song.title} to playlist`}
      >
        Add to Playlist
      </button>
    </div>
  );
}

export default SongCard;