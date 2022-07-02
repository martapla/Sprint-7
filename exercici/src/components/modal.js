import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    width: 100%;
    z-index: 9999;
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(0, 0, 0, .6);
    height: 100%;
    display: flex;
    align-items: center;
`;
const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background: white;
    width: 650px;
    height: 100px;
    border-radius: 9px;
    border: 2px solid black;
`;

function Modal(props){
    const content = props.children
    return <ModalBackground>
        <ModalContent>
            {content}
        </ModalContent>
    </ModalBackground>
}

export default Modal;