import React from 'react'
import styled from 'styled-components';

export default function GiveInput() {
  return (  
    <StyledInput type={'text'} maxLength={3}/>
  ) 
};

const StyledInput = styled.input`
        margin: 0 5px 0 10px;
        width: 60px;
        height: 30px;
        border-radius: 15px;
        border: none;
        color: white;
        background: #4679d6;
        text-align: center;
        &:focus{
          outline: none;
        }
        &::placeholder{
          padding: 5px;
        }
`;
