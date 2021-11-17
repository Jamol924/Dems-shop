import React from "react";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import styled from "styled-components";

export const SimpleTooltipsAdd = () => {
  return (
    <div>
      <Tooltip
        style={{ fontSize: "10px", width: "45px", height: "45px" }}
        title="ModeEdit"
        aria-label="Add"
      >
        <Fab color="primary">
          <ModeEditIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export const SimpleTooltipsDelit = ({ delite, id }) => {
  return (
    <div>
      <Tooltip
        onClick={() => delite(id)}
        style={{ fontSize: "10px", width: "45px", height: "45px" }}
        title="Delete"
        aria-label="Delete"
      >
        <Fab color="secondary">
          <DeleteIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export const SimpleTooltipsCreat = () => {
  return (
    <div>
      <StyledTooltip
        style={{ fontSize: "10px", width: "45px", height: "45px" }}
        title="eskort"
        aria-label="eskort"
      >
        <Fab color="inherit">
          <VisibilityIcon />
        </Fab>
      </StyledTooltip>
    </div>
  );
};

export const StyledTooltip = styled(Tooltip)`
  font-size: 10px;
  width: 45px;
  height: 45px;
  @media (max-width: 550px) {
    font-size: 7px;
    width: 35px;
    height: 35px;
  }
`;
