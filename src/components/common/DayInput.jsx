import React from 'react'
import styled from 'styled-components';
import CheckBox from 'components/common/CheckBox'

export default function DayInput(){
    return(
        <Container>
            <CheckBox/><Title>기간</Title><Input type={'text'} placeholder= "예상 기간을 입력해주세요"/>
        </Container>
    )
};

const Container = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 20px;
`;

const Title =  styled.p`
    padding-right: 20px;
    color: white;
    font-size: 15px;
    font-weight: 300;
`;

const Input = styled.input`
    padding-left: 8px;
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    color: white;
    background: #4679d6;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #eee;
        opacity: 0.8;
        font-size: 12px;
        font-weight: 300;
    }
`;