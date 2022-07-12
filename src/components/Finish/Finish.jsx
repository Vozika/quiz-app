import React from "react";
import "./finish.css";

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
  width: "80%",
  hover: { backgroundColor: "rgb(7, 177, 77, 0.42)" },
}));

const Finish = (props) => {
  return (
    <Item>
      <Typography variant="h6">
        <strong>
        {props.score === 10 && "Oh my God! You are the best!"}
        {(props.score === 9 || props.score === 8) && "Damn. Almost."}
        {props.score === 0 && "You. Suck."}
        {(props.score < 5 && props.score !== 0) && "Better than nothing."}
        {(props.score === 6 || props.score === 7) && "Very nice."}
        </strong><br />
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
  );
};

export default Finish;
