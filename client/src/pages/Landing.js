import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { Slide, useScrollTrigger } from "@mui/material";

function DynamicNavbar(props) {
  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
    window: window ? window() : undefined,
  });

  return (trigger 
    ? <Slide appear={false} direction="down" timeout={150} in={trigger}><Navbar/></Slide>
    : <Navbar type="static"/>
  );
}

class Landing extends React.Component {
  render() {
    return (
      <>
        <DynamicNavbar/>
        <Hero />
        <Product />
        <Pricing />
        <Footer />
      </>
    );
  }
}

export default Landing;