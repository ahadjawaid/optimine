import React from "react";
import { Typography, Box, TextField, InputAdornment, Button, Paper } from '@mui/material';
import DenyAccess from "../components/DenyAccess"
import Navbar from "../components/Navbar";
import UserService from "../services/UserService";
import Search from '@mui/icons-material/Search';
import AnalysisService from "../services/AnalysisService";
import { Stack } from "@mui/system";
import Rating from "../components/Rating";

const trending = [
  {
    name: "Gucci",
    category: "Business",
    color: "#a0e1ab",
  },
  {
    name: "Zelle",
    category: "Finance",
    color: "#a0e1ce",
  },
  {
    name: "Penguins",
    category: "Animals",
    color: "#A0C3E1",
  },
  {
    name: "Cheese Pizza",
    category: "Food",
    color: "#9698d6",
  }
];

// const savedQueries = [
//   {
//     uuid: "974a264f-d3a7-49c0-ad6d-474bfeac5880",
//     positive: 0.4,
//     negative: 0.6,
//     numberOfTweets: 182,
//   },
//   {
//     uuid: "0feea17e-77b3-4b74-b2ff-2e3adc59b7ee",
//     positive: 0.1,
//     negative: 0.9,
//     numberOfTweets: 376,
//   },
//   {
//     uuid: "3094b601-0bb5-400a-9b1c-570e0c06ff43",
//     positive: 0.7,
//     negative: 0.3,
//     numberOfTweets: 73,
//   },
// ];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoaded: false,
      savedQueries: [],
    };
  }

  async componentDidMount() {
    if (this.state.isLoaded)
      return;

    const savedQueries = await AnalysisService.getUser();
    console.log(savedQueries);
  

    UserService.getUser().then((response) => {
      this.setState({
        user: response.user,
        isLoaded: true,
        savedQueries,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    AnalysisService.request(e.target.topic.value);
    e.target.topic.value = "";
  }

  render() {
    const paperStyle = {
      padding: 3,
      borderRadius: "1rem",
    }

    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar />

      <Stack direction="column" spacing={4} padding={6}>
        <Paper sx={paperStyle}>
          <Stack direction="row" justifyContent="space-between" sx={{ paddingLeft: 6, paddingRight: 12 }}>
            <Stack direction="column" width="60%">
              <Typography fontWeight={800} variant="h4" mb={4} mt={3} sx={{
                color: "#2c4961",
              }}>
                Welcome back {this.state.isLoaded && this.state.user.name.split(" ")[0]}!
              </Typography>
              <form onSubmit={this.handleSubmit}>
                <Stack direction="row" mt={1} spacing={2}>
                  <TextField
                    id="search-bar"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                    type="text"
                    name="topic"
                  />
                  <Button type="submit" variant="contained">Search</Button>
                </Stack>
              </form>
            </Stack>

            <Box component="img" src="../assets/data_analytics.png" alt="" width="35%" mt={-6} />
          </Stack>
        </Paper>

        <Paper sx={paperStyle}>
          <Typography mb={3} variant="h5">Saved Queries</Typography>

          {(this.state.savedQueries.length === 0) &&
            <Typography variant="h6">You don't have any saved queries</Typography>
          }

          {(this.state.savedQueries.length > 0) &&
            <Stack direction="column" ml={3} mr={2} spacing={2}>
              {this.state.savedQueries.map((query) => {
                let variant = (query.positive >= query.negative)
                  ? "positive"
                  : "negative"
                let link = `/analysis?uuid=${query.uuid}`;

                return <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography variant="h6" component="a" href={link} width="400px" sx={{
                    textDecoration: "none",
                  }}>{query.topic}</Typography>
                  <Typography width="200px">{query.numberOfTweets} Tweets Analyzed</Typography>
                  <Rating variant={variant} />
                </Stack>;
              })}
            </Stack>
          }
        </Paper>

        <Typography variant="h5">Trending Topics</Typography>

        <Stack direction="row" justifyContent="space-between" ml={-1} mr={-1}>
          {trending.map(({ name, category, color }) =>
            <Paper sx={{ ...paperStyle, backgroundColor: color, width: "25%", ml: 1, mr: 1 }}>
              <Typography fontSize="1.6rem" fontWeight={600}>{name}</Typography>
              <Typography fontSize="1rem">{category}</Typography>
            </Paper>
          )}
        </Stack>
      </Stack>
    </DenyAccess>;
  }
}

export default Dashboard;