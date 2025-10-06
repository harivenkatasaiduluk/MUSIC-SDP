import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaylistCard from './PlaylistCard';
import SongItem from './SongItem';
import SearchBar from './SearchBar';
import axios from 'axios';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  const playlists = [
    { title: 'RRR Hits', image: 'https://image.tmdb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg', url: 'https://www.jiosaavn.com/album/rrr/9ZJB4XCXHS8_' },
    { title: 'Pushpa Anthems', image: 'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/c4/c3/8f/c4c38f8d-b579-8ce7-ef86-04dbb847ea06/cover.jpg/1200x1200bf-60.jpg', url: 'https://www.jiosaavn.com/album/pushpa-the-rise-part-1/7mZ0h4Sgv0g_' },
    { title: 'Guntur Kaaram Vibes', image: 'https://tse2.mm.bing.net/th/id/OIP.gCYi3PFVmNhtGefBTxFoPwHaLH?pid=Api&P=0&h=220', url: 'https://www.jiosaavn.com/album/guntur-kaaram/6B5tO4p4K1U_' },
    { title: 'Animal', image: 'https://static1.showtimes.com/poster/660x980/animal-174150.jpg', url: 'https://www.jiosaavn.com/album/animal/Uu6cgM1w6I_' },
    { title: 'Snehithudu', image: 'https://static.toiimg.com/photo/msid-11663880/11663880.jpg?24601', url: 'https://www.jiosaavn.com/album/magadheera/Yk9E3cA1S8k_' },
  ];

  useEffect(() => {
    axios.get('https://sai-song-api.vercel.app/result?query=telugu hits')
      .then(res => {
        const fetchedSongs = res.data.map(song => ({
          title: song.song || song.title || 'Unknown Title',
          artist: song.singers || song.singer || 'Unknown Artist',
          rating: '★★★★☆',
          image: song.image_url,
          audio: song.media_url || (song.downloadUrl && song.downloadUrl[0].link),
        }));
        setSongs(fetchedSongs);
      })
      .catch(err => console.error('API error:', err));
  }, []);

  const handleSearch = (query) => setSearchQuery(query.toLowerCase());

  const filteredSongs = songs.filter(
    song => song.title.toLowerCase().includes(searchQuery) ||
            song.artist.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <div className="playlists">
        <h2>Top Telugu Playlists</h2>
        <div className="playlist-grid">
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={index}
              title={playlist.title}
              image={playlist.image}
              onClick={() => navigate(`/playlist/${index}`)}
            />
          ))}
        </div>
      </div>
      <div className="songs">
        <h2>Recommended Telugu Songs</h2>
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <SongItem
              key={index}
              title={song.title}
              artist={song.artist}
              rating={song.rating}
              image={song.image}
              audio={song.audio}
            />
          ))
        ) : (
          <p style={{ color: '#b3b3b3', fontSize: '16px', textAlign: 'center', marginTop: '20px' }}>
            No songs found for "{searchQuery}". Try another search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
