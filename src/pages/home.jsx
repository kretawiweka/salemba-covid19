import React from "react";
import Home from "../containers/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
