import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExercises = ({ setBodyPart, bodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodypart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(SearchExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="20px"
        textAlign="center"
      >
        Amazing Workouts You <br />
        Should Know
      </Typography>
      <Box position="relative">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          placeholder="Search Workouts"
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "red",
            color: "#fff",
            textTransform: "none",
            width: { lg: "100px", xs: "70px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "55px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "10%",
          pb: "0",
          pt: "5%",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
