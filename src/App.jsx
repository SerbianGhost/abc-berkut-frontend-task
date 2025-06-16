import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./styles/App.css";
import Home from "./pages/home";
import PhotoPage from './pages/photoPage';
import FavoritesPage from './pages/favoritesPage';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
        <Route path="/photo/search/:query" element={<PhotoPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
