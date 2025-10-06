import React, { createContext, useState, useContext } from 'react';

const PlaylistContext = createContext();

export const usePlaylist = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylist must be used within PlaylistProvider');
  }
  return context;
};

export const PlaylistProvider = ({ children }) => {
  const [customPlaylist, setCustomPlaylist] = useState([]); // User added songs array

  const addToPlaylist = (song) => {
    const existingSong = customPlaylist.find(s => s.title === song.title);
    if (!existingSong) {
      setCustomPlaylist([...customPlaylist, song]);
      console.log(`${song.title} added to playlist`); // Temporary log
    } else {
      console.log(`${song.title} already in playlist`);
    }
  };

  const removeFromPlaylist = (songTitle) => {
    setCustomPlaylist(customPlaylist.filter(s => s.title !== songTitle));
  };

  return (
    <PlaylistContext.Provider value={{ customPlaylist, addToPlaylist, removeFromPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};