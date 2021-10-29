import React from 'react';
import styled from "styled-components"
import { BackAdmin } from '../../components/Back';
import Nav2 from '../../components/Nav2';
import Categore from '../sections/Admen/Categore';
import Contact from './contact';

function Admin() {
    const auth = JSON.parse(localStorage.getItem("token"))
    console.log("auth :",auth)
    return  auth ? (
        <>
            <Wrapper>
                <Nav2 />
                <BackAdmin  />
                <Categore />
            </Wrapper>
        </>
    ):(
        <div>
            <Contact />
        </div>
    )
}

export default Admin

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid red;
`;