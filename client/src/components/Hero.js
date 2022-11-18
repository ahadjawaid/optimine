import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";

class Hero extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Stack className="curvedBox" direction="row" alignItems="center" justifyContent="space-evenly" sx={{
          padding: "5rem 7.5rem",
        }}>
          <Stack alignItems="flex-start" spacing={3} maxWidth="35%">
            <Typography variant="h3">Mine and Analyze Data</Typography>
            <Typography variant="body1">Perform research on topics by mining opinions and analyzing sentiment</Typography>
            <Button variant="contained" href="/signup" sx={{
              padding: 2,
              height: 36,
              borderRadius: 18,
              textDecoration: "none",
            }}>Get Started</Button>
          </Stack>
          <Box component="img" src="../assets/landing-image-1.png" alt="" width="60%" maxWidth={500} />
        </Stack>
      </Container>
    );
  }
}

export default Hero;