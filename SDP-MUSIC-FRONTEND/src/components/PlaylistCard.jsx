import React from 'react';
import './PlaylistCard.css';

function PlaylistCard({ title, image, onClick }) {
  return (
    <div
      className="playlist-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View ${title} playlist`}
    >
      <img src={image} alt={title} className="playlist-image" />
      <h3>{title}</h3>
    </div>
  );
}

export default PlaylistCard;