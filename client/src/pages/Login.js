import React from "react";
import { Alert, Button, Link, Paper, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import DenyAccess from "../components/DenyAccess";
import AuthField from "../components/AuthField";
import AuthService from "../services/AuthService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alertMessage: "" };
    
    this.login = this.login.bind(this);
    this.setErrorMessage = this.setErrorMessage.bind(this);
  }

  login(event) {
    event.preventDefault();
    this.setErrorMessage("");
    const data = new FormData(event.currentTarget);

    AuthService.loginWithEmail(
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
        <Navbar />

        <Stack direction="column" alignItems="center" sx={{ margin: { xs: 5, sm: 10 }, mb: 0 }}>
          <Paper component="form" onSubmit={this.login} sx={{ padding: 4, maxWidth: 480 }}>
            <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>Sign In</Typography>

            {this.state.alertMessage !== "" &&
              <Alert severity="error" sx={{ mt: 2 }}>{this.state.alertMessage}</Alert>
            }

            <AuthField type="email" name="Email" autoComplete="email" autoFocus sx={{ mt: 4 }} />
            <AuthField type="password" name="Password" autoComplete="password" />
            <Button type="sumbit" color="accent" variant="contained" fullWidth sx={{ my: 3 }}>Sign In</Button>
            <Typography>Don't have an account? <Link href="/signup" sx={{ textDecoration: "none" }}>Sign Up</Link></Typography>
          </Paper>
        </Stack>
      </DenyAccess>
    );
  }
}

export default Login;