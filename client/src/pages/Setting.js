import React from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";

class Setting extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Typography variant="h1">Settings</Typography>
      </div>
    );
  }
}

export default Setting;