import React from "react";
import Typography from '@mui/material/Typography';
import Userfront from "@userfront/core";
import { Alert, Box, Button, ButtonBase, Grid, Link, Paper, Stack } from "@mui/material";
import DenyAccess from "../components/DenyAccess";
import AuthField from "../components/AuthField";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alertMessage: "" };

    this.signUp = this.signUp.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);
  }

  signUp(event) {
    event.preventDefault();
    this.setAlertMessage();

    const data = new FormData(event.currentTarget);

    Userfront.signup({
      method: "password",
      email: data.get("email"),
      name: data.get("name"),
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
        <Grid container component="main" sx={{
          height: "100vh",
          background: "linear-gradient(180deg, rgba(35, 104, 162, 0.2) 0%, rgba(99, 162, 216, 0.2) 69.27%, rgba(170, 212, 245, 0.2) 100%);",
        }}>
          <Grid item xs={false} sm={4} md={5.5}>
            <ButtonBase component="a" href="/" disableRipple>
              <Stack direction="row" alignItems="center" sx={{ margin: 3 }}>
                <img src="../assets/logo_black.png" alt="logo" height="82px" />
                <Typography href="/" sx={{ marginLeft: 2.5, fontWeight: "bold" }} variant="h4" component="h2">
                  Optimine
                </Typography>
              </Stack>
            </ButtonBase>

            {/* <Stack zIndex="3" sx={{ mt: 3, ml: 12, mr: -4 }}>
              <img src="../assets/data_analysis.png" alt="" width="100%" zIndex="3" />
            </Stack> */}
          </Grid>

          <Grid item xs={12} sm={8} md={6.5}>
            <Paper component="form" onSubmit={this.signUp} sx={{
              borderRadius: 10,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              height: "100vh"
            }}>
              <Box sx={{ padding: "12%" }}>
                <Typography component="h1" variant="h4" sx={{ fontWeight: "bold", mb: 6 }}>
                  Create Account
                </Typography>

                {this.state.alertMessage !== "" &&
                  <Alert severity="error" sx={{ mt: 2 }}>{this.state.alertMessage}</Alert>
                }

                <AuthField type="name" name="Name" autoComplete="name" autoFocus sx={{ mt: 4 }} />
                <AuthField type="email" name="Email" autoComplete="email" />
                <AuthField type="password" name="Password" autoComplete="password" />
                <Button type="sumbit" color="accent" variant="contained" fullWidth sx={{ my: 3 }}>Create Account</Button>

                <Stack direction="row">
                  <Typography>
                    Already have an account? <Link href="/login" sx={{ textDecoration: "none" }}>Sign In</Link>
                  </Typography>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </DenyAccess>
    );
  }
}

export default SignUp;