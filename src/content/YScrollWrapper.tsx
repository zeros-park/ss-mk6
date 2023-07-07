import React from "react";
import styled from 'styled-components';

const YScrollFlexWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
`
const YScrolledContent = styled.div<{
    height: number
}>`
    ${props => (`
        margin-top: ${props.height}px;
        overflow-y: auto;
    `)}   
`

const YScrollWrapper: React.FC<{
    marginTop: number,
    children: React.ReactNode
}> = ({ marginTop = 0, children }) => {
    return (
        <YScrollFlexWrapper className="_ysfw">
            <YScrolledContent height={marginTop}>
                {children}
            </YScrolledContent>
        </YScrollFlexWrapper>
    );
}

export default YScrollWrapper;