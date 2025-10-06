import React from 'react';
import { usePlaylist } from './PlaylistContext';
import SongItem from './SongItem';

const CustomPlaylist = () => {
  const { customPlaylist, removeFromPlaylist } = usePlaylist();

  return (
    <div className="custom-playlist" style={{ padding: '20px', backgroundColor: '#121212', color: '#fff' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>My Custom Playlist</h2>
      {customPlaylist.length > 0 ? (
        <div className="songs">
          {customPlaylist.map((song, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#1a1a1a', marginBottom: '10px', borderRadius: '6px' }}>
              <SongItem
                title={song.title}
                artist={song.artist}
                rating={song.rating}
                image={song.image}
                audio={song.audio}
              />
              <button
                onClick={() => removeFromPlaylist(song.title)}
                style={{ marginLeft: '10px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer' }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#b3b3b3' }}>No songs in your playlist. Add some from the recommended songs!</p>
      )}
    </div>
  );
};

export default CustomPlaylist;