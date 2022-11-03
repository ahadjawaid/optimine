import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

class Landing extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Product />
        <Pricing />
        <Footer />
      </>
    );
  }
}

export default Landing;