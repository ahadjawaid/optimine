import React from "react";
import { Typography, Paper, Button, Box} from "@mui/material";

class PricingCard extends React.Component {
    render() {
        return (
            <Paper align="center" sx={{
                padding: "2rem",
                borderRadius: "1rem",
            }}>
                <Typography variant="h5" marginBottom={2}>{this.props.title}</Typography>
                <Box marginBottom={3}>
                    <ul>
                        {this.props.descriptions.map((description, key) => {
                            return (
                                <li key={key}><Typography variant="body1">· {description}</Typography></li>
                            );
                        })}
                    </ul>
                </Box>
                <Button color="primary" variant="contained">{this.props.buttonText}</Button>
            </Paper>
        );
    }
}

export default PricingCard;