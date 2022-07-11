import React from "react";
import "./counter.css";
import "animate.css";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "gray" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "50%",
  hover: { backgroundColor: "rgb(7, 177, 77, 0.42)" },
}));

const Counter = (props) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      divider={
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "white" }}
        />
      }
      spacing={1}
    >
      <Item>
        <div className="answer">
          <div
            className={
              props.showRightAnimation
                ? "animate__animated animate__bounce"
                : "animate__animated"
            }
          >
            <ThumbUpIcon />
          </div>

          <strong>{props.rightAnswer}</strong>
        </div>
      </Item>
      <Item>
        <div className="answer">
          <div
            className={
              props.showWrongAnimation
                ? "animate__animated animate__bounce"
                : "animate__animated"
            }
          >
            <ThumbDownIcon />
          </div>

          <strong>{props.wrongAnswer}</strong>
        </div>
      </Item>
    </Stack>
  );
};

export default Counter;
