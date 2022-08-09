import React from 'react'
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Head>
         <Logo  src="/images/schoolLogo.png"/>
        <Title>프로젝트 신청서</Title>
        <Logo  src="/images/schoolLogo.png"/>
      </Head>
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
  display: flex;
  height: 50px;
`

const Title = styled.h1`
    height: 50px;
    color: white;
    padding: 0 5px 0 5px;
    font-size: 2.3rem;
    font-weight: 500;
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
`;