// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';











/* ===== Scroll helpers ===== */
const ScrollToHashElement = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    }
  }, [location]);
  return null;
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App = () => (
  <>
    {/* Per-route metadata */}


    {/* GA4 + UX helpers */}

    <ScrollToTop />
    <ScrollToHashElement />

    <Routes>
      <Route path='/' element={<Homepage />} />

    </Routes>
  </>
);

export default App;
