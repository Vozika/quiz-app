import React from "react";
import Button from "@mui/material/Button";


const Start = (props) => {
  return (
    <>
{/* <Typography>Hello and welcome to my quiz app. Click and enjoy. Try to achieve the highest score possible.<br /><br /></Typography> */}



<br /><br />

      <Button onClick={props.handleCountry} variant="contained">
        Start
      </Button>
      <br />
      <br />
    </>
  );
};

export default Start;
