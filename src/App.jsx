import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Index from "./components/Index.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";

function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
