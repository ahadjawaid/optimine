import { Typography } from "@mui/material";
import React from "react";
import DenyAccess from "../components/DenyAccess";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubscriptionService from "../services/SubscriptionService";

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      sessionId: null,
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
  }

  render() {
    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar />

      <Typography variant="h1">Checkout</Typography>

      <Footer />
    </DenyAccess>
  }
}

export default Checkout;