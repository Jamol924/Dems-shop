import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import TextsmsIcon from "@mui/icons-material/Textsms";
import MessageIcon from "@mui/icons-material/Message";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const label = { inputProps: { red: "Checkbox demo" } };

const Nav = () => {
  const { pathname } = useLocation();
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledNav>
      <Content>
        <Link to="/">
          <StyledH1>
            <a href="#">Dems</a>
          </StyledH1>
        </Link>
        <StyledB>
          <Box sx={{ width: "auto" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="red"
              indicatorColor="secondary"
              aria-label="wrapped label tabs example"
              wrapped
            >
              <Tab
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 12,
                  color: " #000000",
                }}
                value="one"
                label="Home"
                wrapped
              />
              <Tab
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 12,
                  color: " #000000",
                }}
                value="2"
                label="All Ads"
              />
              <Tab
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 12,
                  color: " #000000",
                }}
                value="3"
                label="Pages"
              />
              <Tab
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 12,
                  color: " #000000",
                }}
                value="4"
                label="Stores"
              />
              <Tab
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 12,
                  color: " #000000",
                }}
                value="5"
                label="Blogs"
              />
              <Tab
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 12,
                  color: " #000000",
                }}
                value="6"
                label="Contact"
              />
            </Tabs>
          </Box>
        </StyledB>
        <StyledRight>
          <MessageRight>
            <Checkbox
              {...label}
              icon={<TextsmsIcon />}
              checkedIcon={<MessageIcon />}
              defaultChecked
              sx={{
                color: pink[400],
                "&.Mui-checked": {
                  color: pink[500],
                },
              }}
            />
          </MessageRight>
          <PersonRight>
            <Link to="/contact">
              <Checkbox
                {...label}
                icon={<PersonOutlineIcon />}
                checkedIcon={<PersonIcon />}
                defaultChecked
                sx={{
                  color: pink[400],
                  "&.Mui-checked": {
                    color: pink[500],
                  },
                }}
              />
            </Link>
          </PersonRight>
          <ButtonRight>
            <Link to="/contact">
              <Button
                style={{
                  width: 150,
                  height: 45,
                  borderRadius: 24,
                  backgroundColor: "#f85c70",
                  fontSize: 5,
                }}
                variant="contained"
                color="error"
              >
                <AddIcon />
                <BtnTitle>Post your Ad</BtnTitle>
              </Button>
            </Link>
          </ButtonRight>
        </StyledRight>
      </Content>
    </StyledNav>
  );
};

export const StyledNav = styled.div`
  position: fixed;
  padding: 0px;
  top: 0;
  left: 0;
  background: white;
  right: 0;
  z-index: 1000;
`;

const Content = styled.nav`
  margin-left: 251px;
  margin-right: 182px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
const StyledRight = styled.nav`
  display: flex;
`;
const MessageRight = styled.nav`
  border: none;
`;
const PersonRight = styled.nav`
  margin-right: 10px;
`;
const ButtonRight = styled.div`
  width: 150px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const BtnTitle = styled.div`
  font-size: 12px;
  color: white;
`;

const StyledH1 = styled.h1`
  a {
    text-decoration: none;
    color: #f85c70;
    font-size: 36px;
    font-weight: 1000;
    line-height: 45px;
    font-family: "Quicksand", sans-serif;
    text-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    margin-top: 9px;
  }
`;

const StyledB = styled.div`
  padding-left: 30px;
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #f85c70;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 50%;
`;

export default Nav;
