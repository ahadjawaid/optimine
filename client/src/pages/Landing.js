import React from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Typography variant="h1">Landing</Typography>
      </div>
    );
  }
}

export default Landing;