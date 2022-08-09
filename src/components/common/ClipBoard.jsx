import React from 'react'
import styled from 'styled-components';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Clipboard(){
    const success = () => toast.success("클립보드에 복사가 완료되었습니다.");
    return(
        <Btn onClick={success}>클립보드에 복사</Btn>        
    )
}

const Btn = styled.button`
    margin: 5px 0 5px 0;
    width: 120px;
    height: 30px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight:300;
    color: white;
    background: #7897d1;
    &:focus{
        outline: none;
    }
    &:hover{
        border: 2px solid #8ce3e9;
    }
`;
