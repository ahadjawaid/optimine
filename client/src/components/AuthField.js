import { TextField } from "@mui/material";
import React from "react";

class AuthField extends React.Component {
  render() {
    return <TextField 
      margin="normal"
      variant="standard"
      label={this.props.name}
      name={this.props.name.toLowerCase()}
      autoComplete={this.props.autoComplete}
      type={this.props.type}
      required
      fullWidth
    />;
  }
}

export default AuthField;