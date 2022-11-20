import { Button, Typography } from "@mui/material";
import React from "react";
import DenyAccess from "../components/DenyAccess";
import Navbar from "../components/Navbar";
import SubscriptionService from "../services/SubscriptionService";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.manageSubscriptions = this.manageSubscriptions.bind(this);
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
      <Button onClick={this.manageSubscriptions}>Manage Subscriptions</Button>

    </DenyAccess>
  }
}

export default Account;