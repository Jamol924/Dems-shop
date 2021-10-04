import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import Registration from '../sections/contact/Registration';

import DirectionSnackbar from "../../pages/sections/contact/static/TizimAnimation"

function Contact() {
    return (
        <Wrapper>
            <Nav />
            {/* <DirectionSnackbar /> */}
            <Registration />
        </Wrapper>
    )
}

export default Contact;


const Wrapper = styled.div`
  position: relative;
  height: auto;
  padding-top: 200px;
`;
const VideoBg = styled.div`
    width: 100vw;
    height: auto;
`