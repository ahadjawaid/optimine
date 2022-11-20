import React from "react";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import SubscriptionService from "../services/SubscriptionService";

class PricingPage extends React.Component {
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
    return <>
      <Navbar />

      <Pricing />

    </>
  }
}

export default PricingPage;