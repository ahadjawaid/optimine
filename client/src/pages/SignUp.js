import React from "react";
import { Alert, Box, Button, ButtonBase, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import DenyAccess from "../components/DenyAccess";
import AuthField from "../components/AuthField";
import Logo from "../components/Logo";
import AuthService from "../services/AuthService";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alertMessage: "" };
    
    this.signup = this.signup.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
  }

  signup(event) {
    event.preventDefault();
    this.setErrorMessage("");
    const data = new FormData(event.currentTarget);

    AuthService.registerWithEmail(
      data.get("name"),
      data.get("email"),
      data.get("password"),
      this.setErrorMessage
    );
  }

  setErrorMessage(message) {
    this.setState({ alertMessage: message });
  }

  render() {
    return (
      <DenyAccess when="loggedin" redirect="/dashboard">
        <Grid container component="main" sx={{
          height: "100vh",
          background: "linear-gradient(180deg, rgba(35, 104, 162, 0.2) 0%, rgba(99, 162, 216, 0.2) 69.27%, rgba(170, 212, 245, 0.2) 100%);",
        }}>
          <Grid item xs={false} sm={4} md={5.5} sx={{ display: { xs: "none", sm: "block"}}}>
            <ButtonBase component="a" href="/" disableRipple sx={{ margin: 3 }}>
              <Logo imgHeight={{ sm: "48px", md: "82px" }} fontSize={{ sm: "1.5rem", md: "2.125rem" }} spacing={{ sm: 2.5, md: 3 }} />
            </ButtonBase>

            <Stack alignItems="end" sx={{ mt: { sm: 12, md: 4 }, ml: "12%", mr: "-6%" }}>
              <Box component="img" src="../assets/data_analysis.png" alt="" minWidth="52vh" width="100%" maxWidth="80vh" zIndex="1" />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={8} md={6.5}>
            <Paper component="form" onSubmit={this.signup} sx={{
              borderRadius: 0,
              borderTopLeftRadius: { xs: 0, sm: 48 },
              borderBottomLeftRadius: { xs: 0, sm: 48 },
              height: "100vh"
            }}>
              <Box sx={{ padding: "12%" }}>
                <Typography component="h1" variant="h4" sx={{ fontWeight: "bold", mb: 6 }}>Create Account</Typography>

                {this.state.alertMessage !== "" &&
                  <Alert severity="error" sx={{ mt: 2 }}>{this.state.alertMessage}</Alert>
                }

                <AuthField type="name" name="Name" autoComplete="name" autoFocus sx={{ mt: 4 }} />
                <AuthField type="email" name="Email" autoComplete="email" />
                <AuthField type="password" name="Password" autoComplete="password" />
                <Button type="sumbit" color="accent" variant="contained" fullWidth sx={{ my: 3 }}>Create Account</Button>
                <Typography>Already have an account? <Link href="/login" sx={{ textDecoration: "none" }}>Sign In</Link></Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </DenyAccess>
    );
  }
}

export default SignUp;