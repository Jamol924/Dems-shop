import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from "@mui/icons-material/Visibility";


export const  SimpleTooltipsAdd = () => {
  return (
    <div>
      <Tooltip style={{fontSize:"10px", width:"45px", height:"45px"}} title="Add" aria-label="Add">
        <Fab color="primary" >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export const SimpleTooltipsDelit = ({delite ,id}) => {
  return (
    <div>
      <Tooltip  onClick = { () => delite(id)} style={{fontSize:"10px", width:"45px", height:"45px"}} title="Delete" aria-label="Delete">
        <Fab color="secondary" >
        <DeleteIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export const SimpleTooltipsCreat = () => {
  return (
    <div>
      <Tooltip style={{fontSize:"10px", width:"45px", height:"45px"}} title="eskort" aria-label="eskort">
        <Fab color="inherit" >
          <VisibilityIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
