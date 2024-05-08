import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xm: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{
            width: "50px",
            height: "50px",
            margin: "0 20px",
            borderRadius: "50px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid red",
          }}
          to="/"
        >
          Home
        </Link>
        <a
          href="#excercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Excercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
