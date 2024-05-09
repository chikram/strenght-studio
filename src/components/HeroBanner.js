import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Mainimg from "../assets/images/main.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="red" fontSize="26px" fontWeight="600">
        Strength Studio
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        mb="23px"
        mt="20px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Explore the most impactful workouts
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{ backgroundColor: "red", padding: "10px" }}
      >
        Explore workouts
      </Button>
      <Typography
        fontWeight={600}
        color="red"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={Mainimg} alt="Main" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
