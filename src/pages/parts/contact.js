import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import Registration from '../sections/contact/Registration';

function Contact() {
    return (
        <Wrapper>
            <Nav />
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