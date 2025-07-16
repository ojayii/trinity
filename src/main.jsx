import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import View from './pages/View';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="view/:id" element={<View />} />
        <Route path="view" element={<View />} />
      </Routes>
    </Router>
  </React.StrictMode>
);