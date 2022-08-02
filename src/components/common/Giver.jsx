import React from 'react'
import styled from 'styled-components';

export default function Giver() {
    return(
        <GiveText>신청하는 사람<GiveData>하늬님</GiveData>(인)</GiveText>
    )
}

const GiveText = styled.p`
    padding: 0 10px 0 50px;
    text-align: center;
    font-style: 12px;
    font-weight: 300;
    color: white;
`

const GiveData = styled.strong`
    display: inline-block;
    width: 150px;
    text-align: center;
    font-weight: 400;
`