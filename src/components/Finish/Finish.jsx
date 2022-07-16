import React from "react";
import "./finish.css";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { GiLaurelCrown } from "react-icons/gi";
import { FaPoo } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa";
import { FaFrown } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "gray" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "80%",
  hover: { backgroundColor: "rgb(7, 177, 77, 0.42)" },
}));

const Finish = (props) => {
  return (
    <Item sx={{ paddingTop: "17px" }}>
      {props.score === 10 && <GiLaurelCrown size={64} />}
      {(props.score === 9 || props.score === 8) && (
        <GiDiamondTrophy size={64} />
      )}
      {props.score === 0 && <FaPoo size={64} />}
      {(props.score === 6 || props.score === 7) && <FaTrophy size={64} />}
      {props.score <= 5 && props.score !== 0 && <FaFrown size={64} />}
      <br />
      <Typography variant="h6">
        {props.score === 10 && "You are the King!"}
        {(props.score === 9 || props.score === 8) && "Damn. Almost."}
        {props.score === 0 && "You suck!"}
        {props.score <= 5 && props.score !== 0 && "Better than nothing."}
        {(props.score === 6 || props.score === 7) && "Nice."}
        <br />
        {props.score} out of {props.numberOfQuestions} correct (
        {(props.score / props.numberOfQuestions) * 100}%)
      </Typography>
      <br />
      <Button
        onClick={props.reset}
        variant="contained"
        sx={{ marginBottom: "7px" }}
      >
        Start Again
      </Button>
      <br />
      <br />
    </Item>
  );
};

export default Finish;
