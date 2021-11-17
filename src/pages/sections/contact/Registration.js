import React from "react";
import styled from "styled-components";
import MinNav from "../../../components/common/MineNavbar/MinNav.jsx"

import ContactMenu from "./contact";
import InfoUs from "../home/InfoUs";

export default function Registration() {
  return (
    <div>
      <Wrapper>
        <MinNav />
        <Contact>
          <ContactMenu />
        </Contact>
        <InfoUs />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Contact = styled.div`
  margin-bottom: 100px;
`
