import React, {useState} from 'react';
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';


export default function Langue() {
  const [age, setAge] = useState('uz');
  const state = useSelector(state => state)  
  const dispatch = useDispatch();
    dispatch(language(age));
    console.log(state)




  return (
      <StyledFormControl  fullWidth>
        <Select
        sx={{color:"white"}}
          value={age}
          onChange={(e) => setAge(e.target.value) }
        >
          <MenuItem value="uz">UZB</MenuItem>
          <MenuItem value='ru'>RUS</MenuItem>
          <MenuItem value='en'>ENG</MenuItem>
        </Select>
      </StyledFormControl>
  );
}
export const StyledFormControl = styled(FormControl)`

    .css-1d3z3hw-MuiOutlinedInput-notchedOutline{
        border:none;
        color:white
       
    }
    .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon{
        color: white;
    }
    .css-bpeome-MuiSvgIcon-root-MuiSelect-icon{
        color: white;
    }
`