import React from 'react';
import styled from "styled-components"
import Nav from '../../components/Nav';
import Categore from '../sections/Admen/Categore';

function Admin() {
    return (
        <>
            <Wrapper>
                <Nav />
                <Categore />
            </Wrapper>
        </>
    )
}

export default Admin

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid red;
`;