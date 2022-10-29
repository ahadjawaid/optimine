import React from "react";
import Typography from '@mui/material/Typography';
import DenyAccess from "../components/DenyAccess"

// Components
import Navbar from "../components/Navbar";

class Dashboard extends React.Component {
  render() {
    return (
      <DenyAccess when="loggedout" redirect="/login">
        <Navbar />
        <Typography variant="h1">Dashboard</Typography>
      </DenyAccess>
    );
  }
}

export default Dashboard;