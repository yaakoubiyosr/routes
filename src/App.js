import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Description from "./Description";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A skilled thief is given a chance at redemption.",
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travels through a wormhole in space.",
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<Description movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
