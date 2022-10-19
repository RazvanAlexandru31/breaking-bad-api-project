import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import DeathInfo from "./Pages/DeathInfo";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='deathinfo' element={<DeathInfo/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
