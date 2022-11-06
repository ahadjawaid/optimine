import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

class Hero extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}>
        <Box className="curvedBox" sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "5rem 7.5rem",
        }}>
          <Box sx={{ maxWidth: "35%" }}>
            <Box marginBottom={2}>
              <Typography variant="h3">Mine and Analyze Data</Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="body1">Help people research on topics by mining data and getting a sentiment analysis</Typography>
            </Box>
            <Button variant="contained" >Get Started</Button>
          </Box>
          <Box component="img" src="../assets/landing-image-1.png" alt="landing page image" height={432} />
        </Box>
      </Container>
    );
  }
}

export default Hero;