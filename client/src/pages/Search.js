import React from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Search extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <Typography variant="h1">Search</Typography>

        <Footer />
      </div>
    );
  }
}

export default Search;