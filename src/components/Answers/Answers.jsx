import React from 'react'
import "./answers.css"

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Answers = (props) => {
  return (
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={1}
  >
    {props.question.options.map((answer) => {
      return (
        <Button
          variant="contained"
          fullWidth="true"
          onClick={() => props.optionClicked(answer.isCorrect)}
          key={answer.id}
        >
          {answer.capital}
        </Button>
      );
    })}
  </Stack>
  )
}

export default Answers