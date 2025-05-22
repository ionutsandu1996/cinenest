import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Adăugați mai multe rute pentru paginile de categorie sau video */}
      </Routes>
    </Router>
  );
}

export default App;
