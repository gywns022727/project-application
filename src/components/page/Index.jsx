import React from 'react';
// import { useState } from 'react';
import styled from 'styled-components'
import Header from 'components/common/Header';
import GiveInput from 'components/common/GiveInput'
import TakeInput from 'components/common/TakeInput'
import NameInput from 'components/common/NameInput'
import PersonnelInput from 'components/common/PersonnelInput'
import NumberInput from 'components/common/NumberInput'
import TextArea from 'components/common/TextArea'
import Giver from 'components/common/Giver'
import Taker from 'components/common/Taker'
import Precautions from 'components/common/Precautions'
import Instruction from 'components/common/Instruction'
import Out from 'components/common/Out'
function Index() {
    return(
        <Container>
            <Can>
                <Header/>
                <Title>
                    <GiveInput />이/가<TakeInput />에게 프로젝트를 신청합니다.
                </Title>
                <Content>
                    <NameInput/>
                    <PersonnelInput/>
                    <NumberInput/>
                    <TextArea/>
                    <GiveAndTake>
                        <Giver/>
                        <Taker/>
                    </GiveAndTake>
                </Content>
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
    /* border: 1px solid #000; */
    padding: 20px;
    height: 500px;
    display: flex;
    flex-direction: column;
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
 const Content = styled.div`
    padding: 10px;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
const Title = styled.p`
    padding-bottom: 10px;
    color: white;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
`;

const GiveAndTake = styled.div`
    margin: 0 auto;
    height: 60px;
`

const Btns = styled.div`
    margin: 0 auto;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export default Index;