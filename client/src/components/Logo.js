import { Box, Stack, Typography } from "@mui/material";
import React from "react";

class Logo extends React.Component {
  render() {
    let imgHeight = this.props.imgHeight ?? "48px";
    let fontSize = this.props.fontSize ?? "1.5rem";
    let spacing = this.props.spacing ?? 2.5;

    return <Stack direction="row" alignItems="center" spacing={spacing}>
      <Box component="img" src="../assets/logo_black.png" alt="logo" height={imgHeight} />
      <Typography href="/" sx={{ fontSize: fontSize, fontWeight: "bold" }} variant="h5" component="h2">Optimine</Typography>
    </Stack>
  }
}

export default Logo;