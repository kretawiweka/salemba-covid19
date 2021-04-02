import React from "react";
import News from "../containers/News";
import Header from "../components/Header";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
