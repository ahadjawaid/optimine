import React from "react";
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import DenyAccess from "../components/DenyAccess";

class Settings extends React.Component {
  render() {
    return (
      <DenyAccess when="loggedout" redirect="/login">
        <Navbar />
        <Typography variant="h1">Settings</Typography>
      </DenyAccess>
    );
  }
}

export default Settings;