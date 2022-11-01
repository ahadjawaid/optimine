import { Avatar } from "@mui/material";
import React from "react";

class UserAvatar extends React.Component {
  getColor() {
    let hash = 0, color = "#";

    for (let i = 0; i < this.props.name.length; i++)
      hash = this.props.name.charCodeAt(i) + ((hash << 5) - hash);

    for (let i = 0; i < 3; i++)
      color += `00${((hash >> (i * 8)) & 0xFF).toString(16)}`.slice(-2);

    return color;
  }

  getInitials() {
    let names = this.props.name.split(" ");
    if (names.length == 1) {
      return `${names[0][0]}`
    }
    return `${names[0][0]}${names[1][0]}`
  }

  render() {
    return (
      <Avatar children={this.getInitials()} sx={{ bgcolor: this.getColor(), fontSize: "1rem", height: "36px" }} />
    );
  }
}

export default UserAvatar;