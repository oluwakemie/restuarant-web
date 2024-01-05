import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero/Hero";
import Services from "./components/Services";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Services/>
    </div>
  );
};

export default App;
