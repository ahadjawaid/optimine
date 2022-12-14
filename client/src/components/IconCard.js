import React from "react";
import { Box, Typography } from "@mui/material";

class IconCard extends React.Component {
    render() {
        return (
            <Box elevation={2} sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                maxWidth: "12.5rem",
            }}>
                <Box marginBottom={3} component="img" src={this.props.iconPath}  sx={{ height: "130px"}} />
                <Typography align="center" marginBottom={2} variant="h5" >{this.props.subheading}</Typography>
                {(this.props.body.split(" ").length < 15) ? 
                 <Typography align="center" variant="body1">{this.props.body}</Typography> :
                 <Typography variant="body1">{this.props.body}</Typography>}
            </Box>
        );
    }
}

export default IconCard;