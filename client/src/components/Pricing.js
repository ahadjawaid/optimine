import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import PricingCard from "./PricingCard";
import SubscriptionService from "../services/SubscriptionService";
import AuthService from "../services/AuthService";
import config from "../data/config";

class Pricing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscriptionOptions: SubscriptionService.getSubscriptionOptions(),
    };

    this.createSubscription = this.createSubscription.bind(this);
  }

  createSubscription(event, productKey) {
    event.preventDefault();

    if (AuthService.authenticated) {
      SubscriptionService.createCheckout(productKey).then((response) => {
        window.location.replace(response.url);
      });
    } else {
      window.location.replace(`${config.baseURL}/signup`);
    }
  }

  render() {
    return (
      <Container maxWidth="lg" sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Stack className="curvedBox" sx={{ padding: "5rem 7.5rem" }}>
          <Typography marginBottom={5} align="center" variant="h4">Pricing</Typography>
          <Stack direction="row" alignItems="stretch" justifyContent="space-between" mb={5}>
            {this.state.subscriptionOptions.map((subscription) =>
              <PricingCard
                title={subscription.title}
                priceValue={subscription.price.value}
                priceType={subscription.price.type}
                descriptions={subscription.specifications}
                buttonText="Select"
                onClick={(event) => this.createSubscription(event, subscription.productKey)}
                width="25%"
                maxWidth={200}
              />
            )}
          </Stack>
          <Box>
            <PricingCard
              title="Enterprise"
              descriptions={[
                "Link multiple user accounts under one enterprise account",
                "Get full access to our API",
              ]}
              buttonText="Contact Us"
            />
          </Box>
        </Stack>
      </Container>
    );
  }
}

export default Pricing;