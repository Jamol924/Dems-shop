import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tab from "@mui/material/Tab";
import {
  StyledButton,
  StyledNav,
  StyledH1,
  ButtonRight,
} from "../../../components/Nav";

const Nav = () => {
  const [value, setValue] = React.useState("one");
  const [pageOffset, setPageOffset] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setPageOffset(true);
      else setPageOffset(false);
    });
  }, []);

  return (
    <>
      <StyledNav isScroll={pageOffset}>
        <Link to="/">
          <StyledH1>
            <a href="#">Dems</a>
          </StyledH1>
        </Link>
        <StyledB>
          <ul>
            <li>
              <Link to="/contact">
                <ButtonRight>
                  <StyledButton
                    startIcon={<AddIcon />}
                    sx={{
                      color: "white",
                      borderRadius: "24px",
                      backgroundColor: "#f85c70",
                    }}
                  >
                    Post your Ad
                  </StyledButton>
                </ButtonRight>
              </Link>
            </li>
          </ul>
        </StyledB>
      </StyledNav>
    </>
  );
};

export default Nav;

export const StyledTab = styled(Tab)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12;
  color: #000000;
`;

export const StyledB = styled.div`
  padding-left: 30px;
`;
