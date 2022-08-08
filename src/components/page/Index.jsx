import React from 'react';
import styled from 'styled-components'
import Header from 'components/common/Header';
import Main from 'components/common/Main'
import Footer from 'components/common/Footer'

function Index() {
    return(
        <Container>
            <Content>
                <Header/>
                <Main/>
            </Content>
            <Footer/>
        </Container>
    );
}

const Content = styled.main`
    border: 1px solid #000;
    padding: 10px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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

export default Index;