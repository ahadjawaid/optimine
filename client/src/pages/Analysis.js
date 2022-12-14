import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Stack, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import React from "react";
import DenyAccess from "../components/DenyAccess";
import AnalysisService from "../services/AnalysisService";
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

class Analysis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: null,
      data: null,
      feedback: false,
      feedbackBody: null,
    };

    this.submitFeedback = this.submitFeedback.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  submitFeedback(body) {
    console.log(body);
    this.setState({
      feedback: true,
      feedbackBody: body,
    });
  }

  handleClose() {
    this.setState({
      feedback: false,
      feedbackBody: null,
    });
  }

  async componentDidMount() {
    const query = new URLSearchParams(window.location.search);
    const uuid = query.get("uuid");
    const key = query.get("key");

    const savedQueries = await AnalysisService.getUser();

    const data = savedQueries[key];
    console.log(data);


    data.positive = data.postive / data.numberOfTweets;
    data.negative /= data.numberOfTweets;
    data.neutral /= data.numberOfTweets;

    data.sentiment = (data.sentiment > 0.5) ? 1 : 0;

    console.log(data);

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

      <Dialog open={this.state.feedback} onClose={this.handleClose}>
        <DialogTitle>Submit Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If the analysis for the following tweet seems incorrect, let us know so we can make improvements in the future.
          </DialogContentText>
          <Box height="16px" />
          <DialogContentText ml={1}>
            {this.state.feedbackBody}
          </DialogContentText>
          <Box height="16px" />
          <DialogContentText>
            *Note: submitting feedback won't affect this analysis.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>

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
                  }}>{Math.round(this.state.data.positive * 1000) / 10}%</Typography>
                  <Box height="16px" />
                  <Typography textAlign="center" variant="h6">NEGATIVE RESPONSE</Typography>
                  <Typography textAlign="center" variant="h3" sx={{
                    color: colors.Negative
                  }}>{Math.round(this.state.data.negative * 1000) / 10}%</Typography>
                  <Box height="50px" />
                </Stack>
              </Stack>
            </Stack>
          </Paper>

          <Paper sx={{ ...paperStyle, overflowY: "auto", height: "380px", maxHeight: "380px" }}>
            <Box>
              <Stack direction="column" spacing={2}>
                {this.state.data.tweets.map((tweet, index) => {
                  let variant = (tweet.sentiment < 0.5)
                    ? "negative"
                    : "positive"

                  return <Stack direction="column" spacing={2}>
                    {(index > 0) && <Box height="1px" sx={{ backgroundColor: "#818181" }} />}
                    <Stack direction="row" spacing={2} alignItems="start" justifyContent="space-between">
                      <Typography width="20px" sx={{ color: "#818181" }}>{index + 1}</Typography>
                      <Typography width="400px">{tweet.body}</Typography>
                      <Rating variant={variant} onClick={() => {
                        this.submitFeedback(`${variant.toUpperCase()}: "${tweet.body}"`)
                      }} />
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