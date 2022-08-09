import React from 'react';
import styled from 'styled-components'
import Header from 'components/common/Header';
import Main from 'components/common/Main'
import Footer from 'components/common/Footer'
import { ToastContainer } from "react-toastify"

export default function Index() {
    return(
    <>
        <Container>
            <Content>
                <Header/>
                <Main/>
            </Content>
            <ToastContainer
            position="top-right"
            autoClose={1000}
            closeOnClick
            pauseOnFocusLoss={false}
            draggable
        />
            <Footer/>
        </Container>
    </>
    );
}

 const Container = styled.div`
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Content = styled.main`
    border: 1px solid #b42eb8c1;
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;