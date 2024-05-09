import React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodypart }) => {
  return (
    <Box id="#exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px"></Box>
  );
};

export default Exercises;
