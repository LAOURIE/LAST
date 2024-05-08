import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import BotSpecs from './Components/BotSpecs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/LAST" element={<App />} />
        <Route path="/LAST/:id" element={<BotSpecs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
