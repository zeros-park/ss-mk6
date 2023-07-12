import { IReactFC, IStyledLayoutProps } from "@/types/global";
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section<IStyledLayoutProps>`${({ layout }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    marginTop: `-${layout.headerHeightSize}px`,
})}`
const Content = styled.div<IStyledLayoutProps>`${({ layout }) => ({
    pointerEvents: 'auto',
    marginTop: `${layout.headerHeightSize}px`,
    overflowY: 'auto'
})}`

const YScrollWrapper: IReactFC<IStyledLayoutProps> = ({ layout, children }) => {
    return (
        <Wrapper layout={layout}>
            <Content layout={layout}>
                {children}
            </Content>
        </Wrapper>
    );
}

export default YScrollWrapper;