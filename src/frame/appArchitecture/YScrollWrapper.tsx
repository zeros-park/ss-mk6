import { IReactFC } from "@/types/global";
import React from "react";
import styled from 'styled-components';
import { dcwStyled } from "@/frame/designComponentWrapper";

const Wrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'none',
        marginTop: `-${layout.headerHeightSize}px`,
    }
}))}`
const Content = styled.div`${() => dcwStyled(({ layout }) => ({
    default: {
        pointerEvents: 'auto',
        marginTop: `${layout.headerHeightSize}px`,
        overflowY: 'auto'
    }
}))}`

const YScrollWrapper: IReactFC = ({ children }) => {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default YScrollWrapper;