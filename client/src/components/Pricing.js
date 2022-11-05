import React from "react";
import { Container , Box, Typography} from "@mui/material";
import PricingCard from "./PricingCard";

class Pricing extends React.Component {
    render() {
        return (
            <Container maxWidth="lg" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh",
            }}>
                <Box className="curvedBox" sx={{
                    padding: "5rem 7.5rem",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <Typography marginBottom={5} align="center" variant="h4">Pricing</Typography>
                    <Box marginBottom={5} sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                        <PricingCard 
                            title="Tier I"
                            descriptions={[
                                "Description",
                                "Description",
                                "Description"
                            ]}
                            buttonText="Select Plan"
                        />
                        <PricingCard 
                            title="Tier II"
                            descriptions={[
                                "Description",
                                "Description",
                                "Description"
                            ]}
                            buttonText="Select Plan"
                        />
                        <PricingCard 
                            title="Tier III"
                            descriptions={[
                                "Description",
                                "Description",
                                "Description"
                            ]}
                            buttonText="Select Plan"
                        />
                    </Box>
                    <Box>
                        <PricingCard 
                            title="Enterprise"
                            descriptions={[
                                "Description",
                            ]}
                            buttonText="Contact Us"
                        />
                    </Box>
                </Box> 
            </Container>
        );
    }
}

export default Pricing;