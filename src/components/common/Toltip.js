import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from "@mui/icons-material/Visibility";


export const  SimpleTooltipsAdd = () => {
  return (
    <div>
      <Tooltip title="Add" aria-label="Add">
        <Fab color="primary" >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export const SimpleTooltipsDelit = () => {
  return (
    <div>
      <Tooltip title="Delete" aria-label="Delete">
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
      <Tooltip title="eskort" aria-label="eskort">
        <Fab color="inherit" >
          <VisibilityIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
