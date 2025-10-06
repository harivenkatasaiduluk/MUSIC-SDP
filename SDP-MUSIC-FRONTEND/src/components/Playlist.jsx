import React from 'react';
import { useParams } from 'react-router-dom';
import SongItem from './SongItem';

const Playlist = () => {
  const { id } = useParams();
  const playlists = [
    {
      id: 0,
      title: 'RRR Hits',
      poster: 'https://image.tmdb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
      songs: [
        {
          title: 'Naatu Naatu',
          artist: 'MM Keeravani (RRR)',
          rating: '★★★★★',
          image: 'https://image.tmdb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
          audio: '/audio/naatu.mp3',
        },
        {
          title: 'Dosti',
          artist: 'MM Keeravani (RRR)',
          rating: '★★★★☆',
          image: 'https://image.tmdb.org/t/p/original/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
          audio: '/audio/dosti.mp3',
        },
      ],
    },
    {
      id: 1,
      title: 'Pushpa Hits',
      poster: 'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/c4/c3/8f/c4c38f8d-b579-8ce7-ef86-04dbb847ea06/cover.jpg/1200x1200bf-60.jpg',
      songs: [
        {
          title: 'Oo Antava Mava',
          artist: 'Devi Sri Prasad (Pushpa)',
          rating: '★★★★☆',
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/c4/c3/8f/c4c38f8d-b579-8ce7-ef86-04dbb847ea06/cover.jpg/1200x1200bf-60.jpg',
          audio: '/audio/oo_antava.mp3',
        },
        {
          title: 'Srivalli',
          artist: 'Devi Sri Prasad (Pushpa)',
          rating: '★★★★★',
          image: 'https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/c4/c3/8f/c4c38f8d-b579-8ce7-ef86-04dbb847ea06/cover.jpg/1200x1200bf-60.jpg',
          audio: '/audio/srivalli.mp3',
        },
      ],
    },
    {
      id: 2,
      title: 'Guntur Kaaram Hits',
      poster: 'https://tse2.mm.bing.net/th/id/OIP.gCYi3PFVmNhtGefBTxFoPwHaLH?pid=Api&P=0&h=220',
      songs: [
        {
          title: 'Daakko Daakko',
          artist: 'Thaman S (Guntur Kaaram)',
          rating: '★★★★★',
          image: 'https://tse2.mm.bing.net/th/id/OIP.gCYi3PFVmNhtGefBTxFoPwHaLH?pid=Api&P=0&h=220',
          audio: '/audio/daakko_daakko.mp3',
        },
        {
          title: 'Kurchi Madathapetti',
          artist: 'Thaman S (Guntur Kaaram)',
          rating: '★★★★☆',
          image: 'https://tse2.mm.bing.net/th/id/OIP.gCYi3PFVmNhtGefBTxFoPwHaLH?pid=Api&P=0&h=220',
          audio: '/audio/kurchi_madathapetti.mp3',
        },
      ],
    },
    {
      id: 3,
      title: 'Animal Hits',
      poster: 'https://static1.showtimes.com/poster/660x980/animal-174150.jpg',
      songs: [
        {
          title: 'Hua Main',
          artist: 'Vishal Mishra',
          rating: '★★★★☆',
          image: 'https://static1.showtimes.com/poster/660x980/animal-174150.jpg',
          audio: '/audio/hua_main.mp3',
        },
        {
          title: 'Satranga',
          artist: 'Arijit Singh',
          rating: '★★★★★',
          image: 'https://static1.showtimes.com/poster/660x980/animal-174150.jpg',
          audio: '/audio/satranga.mp3',
        },
      ],
    },
    {
      id: 4,
      title: 'Snehithudu Hits',
      poster: 'https://static.toiimg.com/photo/msid-11663880/11663880.jpg?24601',
      songs: [
        {
          title: 'Panchadara Bomma',
          artist: 'M.M. Keeravani (Magadheera)',
          rating: '★★★★★',
          image: 'https://static.toiimg.com/photo/msid-11663880/11663880.jpg?24601',
          audio: '/audio/panchadara_bomma.mp3',
        },
        {
          title: 'Dheera Dheera',
          artist: 'M.M. Keeravani (Magadheera)',
          rating: '★★★★☆',
          image: 'https://static.toiimg.com/photo/msid-11663880/11663880.jpg?24601',
          audio: '/audio/dheera_dheera.mp3',
        },
      ],
    },
  ];

  const playlist = playlists.find((p) => p.id === parseInt(id));
  if (!playlist) return <div>Playlist not found</div>;

  return (
    <div className="playlist-page" style={{ padding: '20px', backgroundColor: '#121212', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={playlist.poster}
        alt={`${playlist.title} Poster`}
        style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }}
      />
      <h2 style={{ marginTop: '0', fontSize: '24px' }}>{playlist.title}</h2>
      <div className="songs" style={{ marginTop: '20px', width: '100%', maxWidth: '600px' }}>
        {playlist.songs.map((song, index) => (
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
  );
};

export default Playlist;