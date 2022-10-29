import React from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";

class Search extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Typography variant="h1">Search</Typography>
      </div>
    );
  }
}

export default Search;