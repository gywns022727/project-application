import React from 'react'
import styled from 'styled-components';
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Clipboard(){
    
  const onCopyText = () => {
    console.log(window.location.href);
    };

    return(
        <CopyToClipboard onCopy={onCopyText}>
            <Btn onClick={()=> {}}>링크 복사하기</Btn>
        </CopyToClipboard>   
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

