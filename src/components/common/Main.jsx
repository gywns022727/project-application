import React from 'react'
import styled from 'styled-components';
import NameInput from 'components/common/NameInput'
import PersonnelInput from 'components/common/PersonnelInput'
import NumberInput from 'components/common/NumberInput'
import TextArea from 'components/common/TextArea'

export default function Main(){
    return(
        <Container>
            <NameInput/>
            <PersonnelInput/>
            <NumberInput/>
            <TextArea/>
        </Container>
    )
}

const Container = styled.div`
    width: 400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;