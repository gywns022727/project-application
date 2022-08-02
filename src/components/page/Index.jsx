import React from 'react';
// import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from 'components/common/Header';
import TiTleInput from 'components/common/TitleInput';
import DayInput from 'components/common/DayInput'
import Personnel from 'components/common/Personnel'


function Index() {
    return(
        <Container>
            <Header/>
                <Title>
                    <TiTleInput/>이/가<TiTleInput />에게 프로젝트를 신청합니다.
                </Title>
            <Content>
                <DayInput/>
                <Personnel/>
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