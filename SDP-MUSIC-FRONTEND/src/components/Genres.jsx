import React, { useState } from 'react';
import SongItem from './SongItem';

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const genres = ['Pop', 'Rock', 'Hip-Hop', 'Classical', 'Electronic', 'Jazz'];

  // Sample songs data for each genre
  const genreSongs = {
    Pop: [
      { title: 'Shape of You', artist: 'Ed Sheeran', rating: '★★★★☆', image: 'https://tse1.mm.bing.net/th/id/OIP.2kEZj-hPcUAWQlvNpLHpbwHaEK?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { title: 'Just the Way You Are', artist: 'Bruno Mars', rating: '★★★★★', image: 'https://tse3.mm.bing.net/th/id/OIP.SJWlmhyR9dLG6e6y0V9xMAHaEo?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
      { title: 'Blinding Lights', artist: 'The Weeknd', rating: '★★★★☆', image: 'https://tse4.mm.bing.net/th/id/OIP.UhsvbH0BKHd5RbDjIPBRhgHaKe?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    ],
    Rock: [
      { title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', rating: '★★★★★', image: 'https://i.pinimg.com/originals/b0/8b/10/b08b100f662e886c7b459aea076b5d07.jpg', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
      { title: 'Bohemian Rhapsody', artist: 'Queen', rating: '★★★★★', image: 'https://tse2.mm.bing.net/th/id/OIP.lSf-pWdb0zHwID8k1L5mrQHaJ4?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
      { title: 'Hotel California', artist: 'Eagles', rating: '★★★★☆', image: 'https://tse2.mm.bing.net/th/id/OIP.MW3016EhV1VqbTXQxzF-1gHaHa?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
    ],
    'Hip-Hop': [
      { title: 'HUMBLE.', artist: 'Kendrick Lamar', rating: '★★★★★', image: 'https://i.ytimg.com/vi/MyJB5wP6ed8/maxresdefault.jpg', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
      { title: 'Lose Yourself', artist: 'Eminem', rating: '★★★★☆', image: 'https://i.ytimg.com/vi/MyJB5wP6ed8/maxresdefault.jpg', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
      { title: 'Hotline Bling', artist: 'Drake', rating: '★★★★☆', image: 'https://c-cdnet.cdn.smule.com/rs-s34/arr/08/f6/8c131abf-2aa2-46ba-b70f-395f53b95f01.jpg', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' },
    ],
    Classical: [
      { title: 'Symphony No. 5', artist: 'Beethoven', rating: '★★★★★', image: 'https://tse4.mm.bing.net/th/id/OIP.msyTK97JcyGZL7Ag8FaZBgHaJ4?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3' },
      { title: 'The Four Seasons', artist: 'Vivaldi', rating: '★★★★☆', image: 'https://tse4.mm.bing.net/th/id/OIP.XlrL00jAwEpMq0VTuypYcgHaE3?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3' },
      { title: 'Moonlight Sonata', artist: 'Beethoven', rating: '★★★★★', image: 'https://tse2.mm.bing.net/th/id/OIP.5lACc7JwK90BuMAiENsr-AHaJ4?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3' },
    ],
    Electronic: [
      { title: 'Levels', artist: 'Avicii', rating: '★★★★☆', image: 'https://tse2.mm.bing.net/th/id/OIP.JkiVGkPV_ynDY8rITFLkUAHaHa?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3' },
      { title: 'Faded', artist: 'Alan Walker', rating: '★★★★★', image: 'https://tse2.mm.bing.net/th/id/OIP.8EbSAGGYD193fajUltWb1wHaEK?pid=Api&P=0&h=220', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3' },
      { title: 'Titanium', artist: 'David Guetta', rating: '★★★★☆', image: 'https://i.ytimg.com/vi/9qvQiOyz6k0/maxresdefault.jpg', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3' },
    ],
    Jazz: [
      { title: 'Take Five', artist: 'Dave Brubeck', rating: '★★★★★', image: 'https://via.placeholder.com/60?text=Jazz1', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3' },
      { title: 'So What', artist: 'Miles Davis', rating: '★★★★☆', image: 'https://via.placeholder.com/60?text=Jazz2', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3' },
      { title: 'My Funny Valentine', artist: 'Chet Baker', rating: '★★★★☆', image: 'https://via.placeholder.com/60?text=Jazz3', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3' },
    ],
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre === selectedGenre ? null : genre); // Toggle genre selection
  };

  return (
    <div className="genres-page" style={{ padding: '20px', backgroundColor: '#121212', color: '#fff' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Explore Genres</h2>
      <div className="genres-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
        {genres.map((genre, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              backgroundColor: genre === selectedGenre ? '#1a1a1a' : '#1a1a1a', // Highlight selected genre
              borderRadius: '6px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
      {selectedGenre && (
        <div className="genre-playlist" style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{selectedGenre} Playlist</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {genreSongs[selectedGenre].map((song, index) => (
              <SongItem
                key={index}
                title={song.title}
                artist={song.artist}
                rating={song.rating}
                image={song.image}
                audio={song.audio}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Genres;