import React from 'react'
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
        <Logo  src="/images/schoolLogo.png"/>
        <Title>프로젝트 신청서</Title>
        <Logo  src="/images/schoolLogo.png"/>
    </Container>
  )
};

const Container = styled.header`
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    height: 50px;
    color: white;
    font-size: 40px;
    font-weight: 500;
`;

const Logo = styled.img`
    margin: 10px;
    width: 50px;
    height: 50px;
`;