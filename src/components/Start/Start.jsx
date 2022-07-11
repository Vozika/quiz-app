import React from "react";
import Button from "@mui/material/Button";

const Start = (props) => {
  return (
    <>
      <Button onClick={props.handleCountry} variant="contained">
        Start
      </Button>
      <br />
      <br />
    </>
  );
};

export default Start;
