import React from "react";
import "./question.css";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Question = (props) => {
  return (
    <div className={props.showRightAnimation || props.showWrongAnimation ? "animate__animated" : "animate__animated animate__fadeInUp"}>
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

      <Typography variant="h5" sx={{height: "102px"}}>
        {props.question.question}<br />
        <Box
          component="div"
          sx={{ display: "inline", color: "#1976d2", fontWeight: "600" }}
        >
          {props.question.country}
        </Box>
        ?
      </Typography>
      

      <Divider sx={{ borderColor: "white" }}></Divider>
    </div>
  );
};

export default Question;
