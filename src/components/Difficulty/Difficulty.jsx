import React from 'react'
import "./difficulty.css"

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Difficulty = (props) => {
  return (
    <>
<Divider
        sx={{
          "&::before, &::after": {
            borderColor: "white",
          },
        }}
      >
        <Chip
          label="Difficulty"
        />
      </Divider>
    
           <FormControl>
              <FormLabel id="radio-buttons-group-label"></FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                name="radio-buttons-group"
                value={props.numberOfOptions}
                onChange={props.handleChange}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Easy"
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="Normal"
                />
                <FormControlLabel
                  value={4}
                  control={<Radio />}
                  label="Hard"
                />
              </RadioGroup>
            </FormControl>
            <Divider sx={{ borderColor: "white", marginTop: "15px" }}></Divider>
            </>
    
  )
}

export default Difficulty