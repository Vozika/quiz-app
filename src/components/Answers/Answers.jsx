import React from "react";
import "./answers.css";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Answers = (props) => {
  return (
    <div className={props.showRightAnimation || props.showWrongAnimation ? "animate__animated" : "animate__animated animate__fadeIn"}>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {props.question.options.map((option) => {
        return (
          <Button
            variant="contained"
            fullWidth="true"
            onClick={() => props.optionClicked(option.isCorrect)}
            key={option.id}
            disabled={false}
            
          >
            {option.capital}
          </Button>
        );
      })}
    </Stack>
    </div>
  );
};

export default Answers;
