// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import ComingSoon from './ComingSoon';

const App = () => {
  return (
    <Routes> {/* Wrap routes with Routes */}
      <Route path="/coming-soon" element={<ComingSoon />} />
      {/* Add other routes here if needed */}
    </Routes>
  );
};

export default App;
