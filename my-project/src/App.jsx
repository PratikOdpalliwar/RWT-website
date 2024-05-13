import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Insight from "./pages/Insight";

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
