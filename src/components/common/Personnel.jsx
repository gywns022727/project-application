import React from 'react'
import styled from 'styled-components';
import CheckBox from 'components/common/CheckBox'

export default function PersonnelSelect(){
    return(
        <Container>
            <CheckBox/><Title>인원</Title>
            <Select>

            </Select>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 20px;
`;

const Title = styled.p`
    padding-right: 20px;
    color: white;
    font-size: 15px;
    font-weight: 300;
`;

const Select = styled.select`
    width: 204px;
    height: 30px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    color: white;
    background: #4679d6;
    &:focus{
        outline: none;
    }
`;