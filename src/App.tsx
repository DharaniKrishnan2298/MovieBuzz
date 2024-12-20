import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import WatchedPage from './pages/WatchedPage';
import NavBar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/watched" element={<WatchedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
