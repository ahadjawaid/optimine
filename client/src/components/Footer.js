import React from "react";
import { Container , Box, Typography} from "@mui/material";
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
                            {text: "Product", link: "/"},
                            {text: "Pricing", link: "/"},
                            {text: "Contact Us", link: "/"},
                        ]}
                    />
                    <LinkList
                        title="Legal"
                        links={[
                            {text: "Terms", link: "/"},
                            {text: "Privacy", link: "/"},
                            {text: "Cookies", link: "/"},
                            {text: "Copyright", link: "/"},
                        ]}
                    />
                    <LinkList
                        title="Contact Us"
                        links={[
                            {text: "LinkedIn", link: "/"},
                            {text: "optimine@gmail.com", link: "/"},
                        ]}
                    />
                </Box>
            </Container>
        );
    }
}

export default Footer;