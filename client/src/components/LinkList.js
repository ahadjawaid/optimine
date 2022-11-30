import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


class LinkList extends React.Component {
  render() {
    return (
      <Box>
        <Typography marginBottom={1} variant="h4">{this.props.title}</Typography>
        <Box>
          <ul>
            {this.props.links.map(({ text, link }, key) => {
              return (
                <li key={key}>
                  <Typography
                    variant="body1"
                    component={link[0] === "/" ? RouterLink : Link}
                    to={link}
                    href={link}
                    sx={{
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    {text}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
    );
  }
}

export default LinkList;