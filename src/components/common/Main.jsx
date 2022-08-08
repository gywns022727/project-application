import React from 'react'
import styled from 'styled-components';
import NameInput from 'components/common/NameInput'
import PersonnelInput from 'components/common/PersonnelInput'
import NumberInput from 'components/common/NumberInput'
import TextArea from 'components/common/TextArea'
import GiveInput from 'components/common/GiveInput'
import TakeInput from 'components/common/TakeInput'
import Giver from 'components/common/Giver'
import Taker from 'components/common/Taker'

export default function Main(){
    return(
        <Container>
            <Input><GiveInput />이/가<TakeInput />에게 프로젝트를 신청합니다.</Input>
            <NameInput/>
            <PersonnelInput/>
            <NumberInput/>
            <TextArea/>
            <Giver/>
            <Taker/>
        </Container>
    )
}

const Container = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Input = styled.p`
    color: white;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
`;