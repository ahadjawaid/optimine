import { Box, Paper, Stack, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import React from "react";
import DenyAccess from "../components/DenyAccess";
import Navbar from "../components/Navbar";
import Rating from "../components/Rating";

const paperStyle = {
  padding: 3,
  borderRadius: "1rem",
  width: "50%",
}

const colors = {
  Positive: "#47B97D",
  Negative: "#EA6067",
}

const data = {
  uuid: "974a264f-d3a7-49c0-ad6d-474bfeac5880",
  positive: 0.4,
  negative: 0.6,
  numberOfTweets: 182,
  tweets: [
    {
      body: "This product was absolutely amazing and blew my mind away! I would recomment it to anyone who would enjoy it.",
      sentiment: 1, // positive
    },
    {
      body: "I will never be buying this product again. It has ruined my life!",
      sentiment: 0, // negative
    },
    {
      body: "I am very proud of my family for buying me this product as a birthday gift!",
      sentiment: 1,
    },
    {
      body: "Wonderful product. I will be a lifelong customer.",
      sentiment: 1,
    },
    {
      body: "Customer service was aweful. I asked for a refund after a year, and they said it’d been too long! Ridiculous!",
      sentiment: 0,
    },
    {
      body: "I bought this because it looked nice and fit in with the style of my house.",
      sentiment: 1,
    },
    {
      body: "I thought this product would solve all the worlds issues, but it didn’t. How unfortunate.",
      sentiment: 0,
    },
    {
      body: "If you care about yourself, don’t buy this product. It is aweful!",
      sentiment: 0,
    },
  ],
};

class Analysis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: null,
      data: null,
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(window.location.search);
    const uuid = query.get("uuid");

    if (Boolean(uuid)) {
      this.setState({
        uuid: uuid,
        data: data,
      });
    }
  }

  render() {
    let piedata = null;

    if (this.state.uuid !== null) {
      piedata = [
        { name: "Positive", value: this.state.data.positive },
        { name: "Negative", value: this.state.data.negative },
      ];
    }

    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar />

      {this.state.uuid !== null &&
        <Stack direction="row" padding={4} spacing={6} height="78vh">
          <Paper sx={{...paperStyle, height: "380px"}}>
            <Stack direction="column">
              <Typography variant="h5">ANALYSIS</Typography>
              <Stack direction="row">
                <PieChart width={268} height={400}>
                  <Pie
                    data={piedata}
                    cx={110}
                    cy={170}
                    innerRadius={70}
                    outerRadius={105}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {piedata.map(({ name }, index) =>
                      <Cell key={`cell-${index}`} fill={colors[name]} />
                    )}
                  </Pie>
                </PieChart>

                <Box width="1px" height="320px" mt={3} sx={{ backgroundColor: "#818181" }} />

                <Stack direction="column" spacing={1} ml={6} justifyContent="center">
                  <Typography textAlign="center" variant="h6">POSITIVE RESPONSE</Typography>
                  <Typography textAlign="center" variant="h3" sx={{
                    color: colors.Positive
                  }}>{this.state.data.positive * 100}%</Typography>
                  <Box height="16px" />
                  <Typography textAlign="center" variant="h6">NEGATIVE RESPONSE</Typography>
                  <Typography textAlign="center" variant="h3" sx={{
                    color: colors.Negative
                  }}>{this.state.data.negative * 100}%</Typography>
                  <Box height="50px" />
                </Stack>
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ ...paperStyle, overflowY: "hidden" }}>
            <Box>
              <Stack direction="column" spacing={2}>
                {data.tweets.map((tweet, index) => {
                  let variant = (tweet.sentiment === 0)
                    ? "negative"
                    : "positive"

                  return <Stack direction="column" spacing={2}>
                    {(index > 0) && <Box height="1px" sx={{ backgroundColor: "#818181" }} />}
                    <Stack direction="row" spacing={2} alignItems="start" justifyContent="space-between">
                      <Typography width="20px" sx={{ color: "#818181" }}>{index + 1}</Typography>
                      <Typography width="400px">{tweet.body}</Typography>
                      <Rating variant={variant} />
                    </Stack>
                  </Stack>;
                })}
              </Stack>
            </Box>
          </Paper>
        </Stack>
      }
    </DenyAccess>
  }
}

export default Analysis;