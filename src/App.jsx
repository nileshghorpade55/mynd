

import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PricingList from "./pages/PricingList";

function App() {

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<PricingList/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </Router>
  );
}

export default App;