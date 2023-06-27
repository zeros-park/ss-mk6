import React from "react";
import styled from 'styled-components';

const YScrollFlexWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
`
const YScrolledContent = styled.div`
    ${props => (`
        margin-top: ${props.margin_top}px;
        overflow-y: auto;
    `)}   
`

const YScrollWrapper = ({marginTop = 0, children}) => {
    return (
        <YScrollFlexWrapper className="_ysfw">
            <YScrolledContent margin_top={marginTop}> 
                {children}
            </YScrolledContent>
        </YScrollFlexWrapper>
    );
}

export default YScrollWrapper;