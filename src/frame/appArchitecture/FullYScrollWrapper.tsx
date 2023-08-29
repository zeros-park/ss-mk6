import { IReactFC } from "@/types/global";
import React from "react";
import styled from 'styled-components';
import { dcwStyled } from "@/frame/designComponentWrapper";

const Wrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
}))}`
const Content = styled.div`${() => dcwStyled(({ layout, colorSet }) => ({
    default: {
        pointerEvents: 'auto',
        marginTop: `${layout.headerHeightSize}px`,
        overflowY: 'auto'
    },
    darkMode: {
        backgroundColor: colorSet.darkBG,
        color: colorSet.darkFont
    },
}))}`

const FullYScrollWrapper: IReactFC = ({ children }) => {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default FullYScrollWrapper;