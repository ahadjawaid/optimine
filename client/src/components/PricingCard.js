import React from "react";
import { Typography, Button, Stack, Icon, Card, CardContent, CardActions } from "@mui/material";
import Check from "@mui/icons-material/Check";

class PricingCard extends React.Component {
  render() {
    return <Card sx={{ 
      borderRadius: "1rem",
       padding: "2rem", 
       width: this.props.width,
       maxWidth: this.props.maxWidth 
    }}>
      <CardContent>
        <Typography fontSize="1.7em" fontWeight="bold" mb={2}>{this.props.title}</Typography>

        {(this.props.priceValue != null && this.props.priceType != null) &&
          <>
            <Typography fontSize="0.8em" sx={{ mt: 2 }}>Starting at</Typography>
            <Stack direction="row" alignItems="flex-end" mb={2}>
              <Typography fontSize="1.7em" fontWeight="bold">${this.props.priceValue / 100}</Typography>
              <Typography fontSize="1em" sx={{ mb: 0.5 }}>/{this.props.priceType}</Typography>
            </Stack>
          </>
        }

        <Stack spacing={2}>
          {this.props.descriptions.map((description, key) =>
            <Stack direction="row" alignItems="flex-start" key={key}>
              <Icon sx={{ mr: 1 }}><Check /></Icon>
              <Typography variant="body1" textAlign="left">{description}</Typography>
            </Stack>
          )}
        </Stack>
      </CardContent>

      <CardActions>
        <Button variant="contained" color="primary" fullWidth onClick={this.props.onClick} sx={{
          textTransform: "none"
        }}>{this.props.buttonText}</Button>
      </CardActions>
    </Card>;
  }
}

export default PricingCard;