import React from "react";
import Typography from '@mui/material/Typography';
import Userfront from "@userfront/core";
import Navbar from "../components/Navbar";
import { Alert, Button, Link, Paper, Stack } from "@mui/material";
import DenyAccess from "../components/DenyAccess";
import AuthField from "../components/AuthField";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alertMessage: "" };

    this.signIn = this.signIn.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);
  }

  signIn(event) {
    event.preventDefault();
    this.setAlertMessage();

    const data = new FormData(event.currentTarget);

    Userfront.login({
      method: "password",
      email: data.get("email"),
      password: data.get("password"),
      redirect: "/dashboard",
    }).catch((error) => {
      this.setAlertMessage(error.message);
    });
  }

  setAlertMessage(message) {
    this.setState({ alertMessage: message });
  }

  render() {
    return (
      <DenyAccess when="loggedin">
        <Navbar />

        <Stack direction="column" alignItems="center" sx={{ margin: 10 }}>
          <Paper component="form" onSubmit={this.signIn} sx={{ padding: 4, maxWidth: 480 }}>
            <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>Sign In</Typography>

            {this.state.alertMessage !== "" &&
              <Alert severity="error" sx={{ mt: 2 }}>{this.state.alertMessage}</Alert>
            }

            <AuthField type="email" name="Email" autoComplete="email" autoFocus sx={{ mt: 4 }} />
            <AuthField type="password" name="Password" autoComplete="password" />
            <Button type="sumbit" color="accent" variant="contained" fullWidth sx={{ my: 3 }}>Sign In</Button>

            <Stack direction="row">
              <Typography>
                Don't have an account? <Link href="/signup" sx={{ textDecoration: "none" }}>Create Account</Link>
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </DenyAccess>
    );
  }
}

export default Login;