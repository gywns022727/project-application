import React from 'react'
import styled from 'styled-components';
import Giver from 'components/common/Giver'
import Taker from 'components/common/Taker'

export default function Footer(){
    return(
        <Container>
            <Giver/>
            <Taker/>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    margin: 0 auto;
    height: 60px;  
`;