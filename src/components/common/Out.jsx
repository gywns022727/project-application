import React from 'react'
import styled from 'styled-components';
import Popup from "reactjs-popup";
import DownLoad from 'components/common/DownLoad';
import ClipBoard from 'components/common/ClipBoard';
import Url from 'components/common/Url';

export default function Out() {
    return(
        <Popup
          trigger={<OutBtn>가져가기</OutBtn>}
          position="top center"
          on="hover"
        >
            <Box>
                <DownLoad/>
                <ClipBoard/>
                <Url/>
            </Box>
        </Popup>
    );
}

const OutBtn = styled.button`
    margin-top: 10px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight:300;
    color: white;
    background: #4679d6;
    text-align: center;
    justify-content: center;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    width: 150px;
    height: 150px;
    border: 5px solid white;
    color: white;
    background: #4679d6;
`;
