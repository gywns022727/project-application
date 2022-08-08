import React from 'react'
import styled from 'styled-components';
import Precautions from 'components/common/Precautions'
import Instruction from 'components/common/Instruction'
import Out from 'components/common/Out'

export default function Footer(){
    return(
        <Container>
            <Btns>
              <Precautions/>
              <Instruction/>
              <Out/>
            </Btns>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    height: 60px;
`;

const Btns = styled.div`
    margin: 0 auto;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;