import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by song, artist, or album..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        aria-label="Search for songs, artists, or albums"
      />
      <button className="search-btn" onClick={handleSearch} aria-label="Search">
        Search
      </button>
    </div>
  );
}

export default SearchBar;