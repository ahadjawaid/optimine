import React from "react";
import { Typography, Box, Container, TextField, InputAdornment, Button } from '@mui/material';
import DenyAccess from "../components/DenyAccess"
import Navbar from "../components/Navbar";
import UserService from "../services/UserService";
import Search from '@mui/icons-material/Search';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    if (this.state.isLoaded)
      return;

    UserService.getUser().then((response) => {
      this.setState({
        user: response.user,
        isLoaded: true,
      });
    });
  }

  render() {
    const centerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <DenyAccess when="loggedout" redirect="/login">
        <Navbar />

        <Container sx={{ 
          display: "flex",
          flexDirection: "column", 
          height: "80vh",
          justifyContent: "center",
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column", 
            height: "35%",
            justifyContent: "space-between",
          }}>
            <Box>
              <Typography fontWeight={800} align="center" variant="h2">optimine</Typography>
            </Box>
            <Box sx={centerStyle}>
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
                type="search"
              />
            </Box>
            <Box sx={centerStyle}>
              <Button variant="contained">Search</Button>
            </Box>
          </Box>
        </Container>
      </DenyAccess>
    );
  }
}

export default Dashboard;