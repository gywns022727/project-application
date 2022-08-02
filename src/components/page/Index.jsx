import React from 'react';
// import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from 'components/common/Header';
import TiTleInput from 'components/common/TitleInput';
import NameInput from 'components/common/NameInput'
import PersonnelInput from 'components/common/PersonnelInput'
import TitleInput from 'components/common/TitleInput';
import NumberInput from 'components/common/NumberInput'
import TextArea from 'components/common/TextArea'


function Index() {
    return(
        <Container>
            <Header/>
                <Title>
                    <TitleInput />이/가<TiTleInput />에게 프로젝트를 신청합니다.
                </Title>
            <Content>
                <NameInput/>
                <PersonnelInput/>
                <NumberInput/>
                <TextArea/>
            </Content>
        </Container>
    );
}

 const Container = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
 const Content = styled.main`
     padding: 10px;
    border: 1px solid #000;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.p`
    padding-bottom: 20px;
    color: white;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
`;
export default Index;