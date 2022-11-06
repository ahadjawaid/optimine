import { Button, Typography } from "@mui/material";
import React from "react";
import DenyAccess from "../components/DenyAccess";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SubscriptionService from "../services/SubscriptionService";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.createSubscription = this.createSubscription.bind(this);
    this.manageSubscriptions = this.manageSubscriptions.bind(this);
  }

  createSubscription(event, productKey) {
    event.preventDefault();
    SubscriptionService.createCheckout(productKey).then((response) => {
      window.location.replace(response.url);
    });
  }

  manageSubscriptions(event) {
    event.preventDefault();
    SubscriptionService.manageSubscriptions().then((response) => {
      window.location.replace(response.url);
    });
  }

  render() {
    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar />

      <Typography variant="h1">Account</Typography>
      <Button onClick={(e) => this.createSubscription(e, "prod_MjEl0zTPhTWiX4")}>Create Subscription</Button>
      <Button onClick={this.manageSubscriptions}>Manage Subscriptions</Button>

      <Footer />
    </DenyAccess>
  }
}

export default Account;