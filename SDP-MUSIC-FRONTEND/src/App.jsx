import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Playlist from './components/Playlist';
import CustomPlaylist from './components/CustomPlaylist';
import { PlaylistProvider } from './components/PlaylistContext';
import Genres from './components/Genres';
import Login from './components/Login';
import Signup from './components/Signup'; 
import './App.css';
import './components/Header.css';
import AdminLogin from "./components/AdminLogin";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute"; // 👈 use this one

function App() {
  return (
    <PlaylistProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />

          {/* User Routes */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/genres" element={<ProtectedRoute><Genres /></ProtectedRoute>} />
          <Route path="/playlists" element={<ProtectedRoute><CustomPlaylist /></ProtectedRoute>} />
          <Route path="/playlist/:id" element={<ProtectedRoute><Playlist /></ProtectedRoute>} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Default Fallback */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </PlaylistProvider>
  );
}

export default App;
