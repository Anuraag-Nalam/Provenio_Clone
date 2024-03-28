import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage'
import Tso from './pages/Tso/Tso'
import Dso from './pages/Dso/Dso'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Tso" element={<Tso />} />
        <Route path="/Dso" element={<Dso />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
