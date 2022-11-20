import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import IconCard from "./IconCard";

class Product extends React.Component {
  renderCardList(cardListInfo) {
    return (cardListInfo.map(({ iconPath, subheading, body }, key) => {
      return (
        <IconCard key={key} iconPath={iconPath} subheading={subheading} body={body} />
      );
    }));
  }

  render() {
    const firstCardList = [
      {
        iconPath: "../assets/icon-search.png",
        subheading: "Search",
        body: "Use key words to find the topic you want analyzed",
      },
      {
        iconPath: "../assets/icon-select.png",
        subheading: "Select",
        body: "Select the category for your analysis",
      },
      {
        iconPath: "../assets/icon-delivery.png",
        subheading: "Analyze",
        body: "Gain valiable insights into the topic of your choosing",
      },
    ]

    const secondCardList = [
      {
        iconPath: "../assets/icon-dashboard.png",
        subheading: "Analytics",
        body: "Optimine provides easy accessibility to online sentiment gathered from social media sites using our machine learning model",
      },
      {
        iconPath: "../assets/icon-opinion.png",
        subheading: "Opinions",
        body: "Optimine is easy to use and provides an economical and insightful analysis on a topic of your choosing based on online opinions.",
      },
    ]


    return (
      <Container id="product" component="div" maxWidth="lg" sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Stack className="curvedBox" spacing={8} sx={{ padding: "3rem 6rem" }}>
          <Typography mt={2} align="center" variant="h4">How it works?</Typography>
          <Stack direction="row" alignItems="flex-start" justifyContent="space-between" marginBottom={10}>
            {this.renderCardList(firstCardList)}
          </Stack>
          <Typography mt={2} align="center" variant="h4">What it Does?</Typography>
          <Stack direction="row" alignItems="flex-start" justifyContent="space-around">
            {this.renderCardList(secondCardList)}
          </Stack>
        </Stack>
      </Container>
    );
  }
}

export default Product;