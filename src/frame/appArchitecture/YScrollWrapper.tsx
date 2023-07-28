import { IReactFC } from "@/types/global";
import { IStateLayout } from "@/store/slice/frameSlice";
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section<IStateLayout>`${({ layout }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    marginTop: `-${layout.headerHeightSize}px`,
})}`
const Content = styled.div<IStateLayout>`${({ layout }) => ({
    pointerEvents: 'auto',
    marginTop: `${layout.headerHeightSize}px`,
    overflowY: 'auto'
})}`

const YScrollWrapper: IReactFC<IStateLayout> = ({ layout, children }) => {
    return (
        <Wrapper layout={layout}>
            <Content layout={layout}>
                {children}
            </Content>
        </Wrapper>
    );
}

export default YScrollWrapper;