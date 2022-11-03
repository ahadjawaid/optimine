import React from "react";
import { Container, Box, Typography, Icon } from "@mui/material";
import IconCard from "./IconCard";

class Product extends React.Component {
    renderCardList(cardListInfo) {
        return (cardListInfo.map(({ iconPath, subheading, body }, key) => {
            return (
                <IconCard key={key} iconPath={iconPath} subheading={subheading} body={body} />
            );
        }));
    }

    render() {
        const firstCardList = [
            {
                iconPath: "../assets/icon-search.png",
                subheading: "Search the Topic", 
                body: "Pick the topic you want to mine on and search the term",
            },
            {
                iconPath: "../assets/icon-select.png",
                subheading: "Select the topic", 
                body: "Select the topic you want the analysis on",
            },
            {
                iconPath: "../assets/icon-delivery.png",
                subheading: "Get the analysis", 
                body: "Request the analysis and get you analysis in a prompt amount of time",
            },
        ]

        const secondCardList = [
            {
                iconPath: "../assets/icon-dashboard.png",
                subheading: "Analytics", 
                body: "Optimine provides users easy accessibility to online opinions mined from social media sites using sentiment analysis",
            },
            {
                iconPath: "../assets/icon-opinion.png",
                subheading: "Opinions", 
                body: "Optimine will be an easy to use application that allows users to get an economical and insightful analysis on a topic of their choosing based on the opinions found from social media sites.",
            },
        ]


        return (
            <Container maxWidth="lg" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}>
                <Box className="curvedBox" sx={{
                    padding: "3rem 6rem",
                }}>
                    <Box>
                        <Typography marginBottom={3} align="center" variant="h3">How it works?</Typography>
                        <Box marginBottom={10} sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                        }}>
                            {this.renderCardList(firstCardList)}
                        </Box>
                    </Box>
                    <Box>
                        <Typography marginBottom={3} align="center" variant="h3">What it Does?</Typography>
                        <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}>
                            {this.renderCardList(secondCardList)}
                        </Box>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default Product;