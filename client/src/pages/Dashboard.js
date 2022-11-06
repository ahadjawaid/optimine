import React from "react";
import Typography from '@mui/material/Typography';
import DenyAccess from "../components/DenyAccess"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserService from "../services/UserService";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    if (this.state.isLoaded)
      return;

    UserService.getUser().then((response) => {
      this.setState({
        user: response.user,
        isLoaded: true,
      });
    });
  }

  render() {
    return (
      <DenyAccess when="loggedout" redirect="/login">
        <Navbar />

        <Typography variant="h1">{this.state.isLoaded ? this.state.user.name : "Dashboard"}</Typography>

        <Footer />
      </DenyAccess>
    );
  }
}

export default Dashboard;