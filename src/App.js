import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import AppStore from "./components/AppStore";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore/>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
