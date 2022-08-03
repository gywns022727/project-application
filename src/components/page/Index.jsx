import React from 'react';
// import { useState } from 'react';
import styled from 'styled-components'
import Header from 'components/common/Header';
import Main from 'components/common/Main'
import Footer from 'components/common/Footer'
import Precautions from 'components/common/Precautions'
import Instruction from 'components/common/Instruction'
import Out from 'components/common/Out'
function Index() {
    return(
        <Container>
            <Can>
                <Header/>
                <Main/>
                <Footer/>
            </Can>
            <Btns>
              <Precautions/>
              <Instruction/>
              <Out/>
            </Btns>
        </Container>
    );
}

const Can = styled.main`
    border: 1px solid #000;
    padding: 20px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

 const Container = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Btns = styled.div`
    margin: 0 auto;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export default Index;