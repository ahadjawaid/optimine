import React from "react";
import { AppBar, Box, Button, ButtonBase, Divider, IconButton, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Tooltip } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle"
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import UserAvatar from "./UserAvatar";
import AuthService from "../services/AuthService";
import Logo from "./Logo";

const defaultPages = ["Product", "Pricing"];
const userPages = ["Explore", "Queries"];

const navButtonStyle = {
  padding: 2,
  height: 36,
  borderRadius: 18,
  fontSize: "1rem",
  textTransform: "none",
}
const defaultPageButtonStyle = { 
  display: { xs: "none", sm: "flex" }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleUserMenu: false };
    this.openUserMenu = this.openUserMenu.bind(this);
    this.closeUserMenu = this.closeUserMenu.bind(this);
    this.logout = this.logout.bind(this);
  }

  openUserMenu(event) {
    this.setState({ toggleUserMenu: event.currentTarget });
  }

  closeUserMenu() {
    this.setState({ toggleUserMenu: false });
  }

  logout() {
    this.closeUserMenu();
    AuthService.logout();
  }

  render() {
    let pages = AuthService.authenticated ? userPages : defaultPages
    let pageButtonStyle = AuthService.authenticated ? {} : {...navButtonStyle, ...defaultPageButtonStyle}
    let userMenuOpen = Boolean(this.state.toggleUserMenu);

    return <AppBar position="static" color="background" sx={{ padding: 0.5 }}>
      <Toolbar>
        <ButtonBase component="a" href={AuthService.authenticated ? "/dashboard" : "/"} disableRipple>
          <Logo />
        </ButtonBase>

        <Box component="div" sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={1.2} component="div">
          {pages.map((page, key) =>
            <Button key={key} href={"/" + page.toLowerCase()} sx={pageButtonStyle} variant="text" color="inherit">{page}</Button>
          )}

          {AuthService.authenticated && 
            <div>
              <Tooltip title="Account settings">
                <IconButton onClick={this.openUserMenu}>
                  <UserAvatar name={AuthService.user.name ?? ""} />
                </IconButton>
              </Tooltip>

              <Menu anchorEl={this.state.toggleUserMenu} open={userMenuOpen} onClose={this.closeUserMenu}>
                <MenuItem component="a" href="/profile">
                  <ListItemIcon><AccountCircle /></ListItemIcon> Profile
                </MenuItem>
                <Divider />
                <MenuItem component="a" href="/settings">
                  <ListItemIcon><Settings /></ListItemIcon> Settings
                </MenuItem>
                <MenuItem onClick={this.logout}>
                  <ListItemIcon><Logout /></ListItemIcon> Sign Out
                </MenuItem>
              </Menu>
            </div>
          }

          {!AuthService.authenticated && 
            <Button href="/login" sx={navButtonStyle} variant="contained" color="secondary">Sign In</Button>
          }
          {!AuthService.authenticated && 
            <Button href="/signup" sx={navButtonStyle} variant="contained" color="primary">Sign Up</Button>
          }
        </Stack>
      </Toolbar>
    </AppBar>;
  }
}

export default Navbar;