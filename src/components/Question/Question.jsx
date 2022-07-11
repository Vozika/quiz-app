import React from "react";
import "./question.css";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Question = (props) => {
  return (
    <div>
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "white",
          },
        }}
      >
        <Chip
          label={`${props.currentQuestion} out of ${props.numberOfQuestions}`}
        />
      </Divider>
      <br />

      <Typography variant="h5">
        {props.question.question}{" "}
        <Box
          component="div"
          sx={{ display: "inline", color: "#1976d2", fontWeight: "600" }}
        >
          {props.question.country}
        </Box>
        ?
      </Typography>
      <br />
      <br />

      <Divider sx={{ borderColor: "white" }}></Divider>
    </div>
  );
};

export default Question;
