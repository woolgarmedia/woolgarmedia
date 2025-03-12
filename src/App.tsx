import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SuccessStories from "./components/SuccessStories";
import StoryDetail from "./components/StoryDetail";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPage from "./components/ServicesPage";
import { setPageTitle } from "./utils/title";
import Projects from "./components/Projects";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    setPageTitle("Digital Services in Oxfordshire"); // Will set title to "About Us | Woolgar Media"
  }, []);

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <WhyChooseUs />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/success-stories/:id" element={<StoryDetail />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
