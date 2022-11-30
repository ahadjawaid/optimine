import { Button, Paper, Typography } from "@mui/material";
import React from "react";

class Rating extends React.Component {
  render() {
    let backgroundColor = (this.props.variant === "positive")
      ? "#EEFAF4"
      : "#FFF4F3"
    let color = (this.props.variant === "positive")
      ? "#47B97D"
      : "#EA6067"
    let text = (this.props.variant === "positive")
      ? "Positive"
      : "Negative"

    if (this.props.onClick !== null) {
      return <Button elevation={0} sx={{
        backgroundColor: backgroundColor,
        border: `1px solid ${color}`,
        padding: 0.5,
        width: "100px",
        textTransform: "none",
      }} onClick={this.props.onClick}>
        <Typography color={color} textAlign="center">{text}</Typography>
      </Button>
    }

    return <Paper elevation={0} sx={{
      backgroundColor: backgroundColor,
      border: `1px solid ${color}`,
      padding: 0.5,
      width: "100px",
    }}>
      <Typography color={color} textAlign="center">{text}</Typography>
    </Paper>;
  }
}

export default Rating;