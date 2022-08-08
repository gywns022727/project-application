import React, { useState } from 'react'
import styled from 'styled-components';
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Clipboard(){
    

    const [copied, setCopied] = useState(false);

    function copy() {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    }

    return(
        <CopyToClipboard>
            <Btn onClick={copy}>{copied}링크 복사하기</Btn>
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

