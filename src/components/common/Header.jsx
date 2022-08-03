import React from 'react'
import styled from 'styled-components';
import GiveInput from 'components/common/GiveInput'
import TakeInput from 'components/common/TakeInput'

export default function Header() {
  return (
    <Container>
      <Head>
         <Logo  src="/images/schoolLogo.png"/>
        <Title>프로젝트 신청서</Title>
        <Logo  src="/images/schoolLogo.png"/>
      </Head>
      <Input>
        <GiveInput />이/가<TakeInput />에게 프로젝트를 신청합니다.
      </Input>
    </Container>
  )
};

const Container = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Head = styled.div`
  margin-bottom: 25px;
  display: flex;
  height: 50px;
`

const Title = styled.h1`
    height: 50px;
    color: white;
    font-size: 40px;
    font-weight: 500;
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
`;

const Input = styled.p`
    margin-bottom: 10px;
    color: white;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
`;