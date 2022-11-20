import { Container, Typography } from "@mui/material";
import React from "react";
import DenyAccess from "../components/DenyAccess";
import Navbar from "../components/Navbar";
import SubscriptionService from "../services/SubscriptionService";

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      sessionId: null,
      canceled: false,
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get("session_id");

    if (Boolean(query.get("success")) && sessionId !== this.state.sessionId) {
      this.setState({
        success: true,
        sessionId: sessionId,
      });

      SubscriptionService.saveCheckout(sessionId);
    }

    if (Boolean(query.get("canceled"))) {
      this.setState({
        canceled: true,
      })
    }
  }

  render() {
    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar />

      <Container sx={{ 
        width: "100vw", 
        height: "80vh", 
        alignItems: "center", 
        justifyContent: "center", 
        display: "flex" 
      }}>
        <Typography variant="h1">{this.state.canceled ? "Checkout Canceled" : (this.state.success ? "Checkout Successful" : "Checkout Failed")}</Typography>
      </Container>

    </DenyAccess>
  }
}

export default Checkout;