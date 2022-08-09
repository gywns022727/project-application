import React from 'react'
import styled from 'styled-components';
import ClipboardCopy from 'react-copy-to-clipboard';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function Clipboard(){
    const url = window.location.href;
    const success = () => toast.success("링크 복사가 완료되었습니다.");
    return(
        <ClipboardCopy text={url} onCopy={() => url}>
            <Btn onClick={success}>링크 복사하기</Btn>
        </ClipboardCopy>
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