import { Avatar } from "@mui/material";
import React from "react";

class UserAvatar extends React.Component {
  getColor() {
    let hash = 0;
    let color = "#";
    let i;

    for (i = 0; i < this.props.name.length; i++) {
      hash = this.props.name.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  getInitials() {
    return `${this.props.name.split(" ")[0][0]}${this.props.name.split(" ")[1][0]}`
  }

  render() {
    return (
      <Avatar
        sx={{ bgcolor: this.getColor() }}
        children={this.getInitials()} />
    )
  }
}

export default UserAvatar;