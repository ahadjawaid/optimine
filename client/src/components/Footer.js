import React from "react";
import { Container , Box } from "@mui/material";
import Logo from "./Logo";
import LinkList from "./LinkList";


class Footer extends React.Component {
    render() {
        return (
            <Container 
                maxWidth="lg"
                sx={{
                    borderTop: "1.5px solid #2b2a33",
                }}
            >
                <Box marginTop={5} marginBottom={5} sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                }}>
                    <Logo imgHeight="125px" fontSize="2rem" />
                    <LinkList
                        title="Pages"
                        links={[
                            {text: "Product", link: "#product"},
                            {text: "Pricing", link: "#pricing"},
                            {text: "Contact Us", link: "/contact"},
                        ]}
                    />
                    <LinkList
                        title="Legal"
                        links={[
                            {text: "Terms", link: "/terms"},
                            {text: "Privacy", link: "/privacy"},
                            {text: "Cookies", link: "/cookie"},
                            {text: "Copyright", link: "/copywrite"},
                        ]}
                    />
                    <LinkList
                        title="Contact Us"
                        links={[
                            {text: "LinkedIn", link: "https://www.linkedin.com"},
                            {text: "optimine@gmail.com", link: "mailto:optimine@gmail.com"},
                        ]}
                    />
                </Box>
            </Container>
        );
    }
}

export default Footer;