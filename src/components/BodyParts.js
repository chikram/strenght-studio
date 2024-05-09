import React from "react";
import { Typography, Stack } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid red" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="gym" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="black"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
