// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar'; 
import { Button } from './components/Button'; 
import { Counter } from './components/Counter'; 
import { List } from './components/List'; 
import { Crud } from './components/Crud'; 
import { Home } from './components/Home'; 

export const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/names" element={<List />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </div>
    </Router>
  );
};

