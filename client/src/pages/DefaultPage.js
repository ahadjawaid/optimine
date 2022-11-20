import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

class DefaultPage extends React.Component {
    render() {
        return(
            <Box>
                <Navbar></Navbar>
                <Typography variant="h2" align="center">{this.props.children}</Typography>
            </Box>
        );
    }
}

export default DefaultPage;