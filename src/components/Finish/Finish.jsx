import React from 'react'
import "./finish.css"

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "gray" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "50%",
    hover: { backgroundColor: "rgb(7, 177, 77, 0.42)" },
  }));

const Finish = (props) => {
  return (
    <Item>
    <Typography variant="h6">
      {props.score} out of {props.numberOfQuestions} correct (
      {(props.score / props.numberOfQuestions) * 100}%)
    </Typography>
    <br />
    <Button onClick={props.reset} variant="contained">
      Start Again
    </Button>
    <br />
    <br />
  </Item>
  )
}

export default Finish