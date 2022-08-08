import React from 'react'
import styled from 'styled-components';

export default function Taker() {
    return(
        <TakeText>신청받는 사람<TakeeData>용왕님</TakeeData>(인)</TakeText>
    )
}

const TakeText = styled.p`
    font-style: 12px;
    font-weight: 300;
    color: white;
`

const TakeeData = styled.strong`
    display: inline-block;
    width: 150px;
    text-align: center;
    font-weight: 400;
`