import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="md:px-10">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
