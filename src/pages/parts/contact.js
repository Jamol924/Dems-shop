import React from 'react';
import styled from 'styled-components';
import Nav2 from '../../components/Nav2';
import Registration from '../sections/contact/Registration';

function Contact() {
    return (
        <Wrapper>
            <Nav2 />
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