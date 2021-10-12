import * as React from "react";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = (reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <StyledLoadingButton
        endIcon={<KeyboardArrowDownIcon />}
        loadingPosition="end"
        onClick={handleOpen}
        sx={{ color: "rgba(0, 0, 0, 0.54)",display:"flex", justifyContent:"space-evenly" }}
      >
        Bo'limni tanlang
      </StyledLoadingButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Bo'limni tanlang
          </Typography>
          <CardContent>
            <CardList>
              <img src="" />
              <Title>Menu defehf ef dfefdrf ererere f</Title>
            </CardList>
            <CardList></CardList>
            <CardList></CardList>
            <CardList></CardList>
            <CardList></CardList>
          </CardContent>
        </Box>
      </Modal>
    </div>
  );
}

const CardContent = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
const StyledLoadingButton = styled(LoadingButton)`
  height: 53px;
  width: 30%;
  background-color: #dedede !important ;
  font-size: 1rem;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.00938em;
  @media (max-width: 800px) {
    width: 70%;
  }
`;
const CardList = styled.div`
  width: 140px;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
  position: relative;
  box-shadow: 1px 1px 4px #ccc;
`;
const Title = styled.div`
  position: absolute;
  top: 1px;
  left: 3px;
  font-size: 12px;
  color: #000000;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
