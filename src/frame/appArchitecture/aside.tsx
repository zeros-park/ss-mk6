import React from "react";
import styled from 'styled-components';

import { IReactFC } from "@/types/global";
import { IStateLayout } from "@/store/slice/frameSlice";
import { useSelector } from "react-redux";
import { IRootStore } from "@/store";
import YScrollWrapper from "@/frame/appArchitecture/YScrollWrapper";

const Wrapper = styled.section<IStateLayout>`${({ layout }) => ({
    position: 'absolute',
    pointerEvents: 'none',
    top: 0,
    left: 0,
    width: `${layout.asideLeftSizeOptions.default}px;`,
    height: '100%',
    [`@media screen and (max-width: ${layout.mediaWidthOptions.simple}px)`]: {
        width: `${layout.asideLeftSizeOptions.simple}px`
    },
    [`@media screen and (max-width: ${layout.mediaWidthOptions.minimal}px)`]: {
        display: 'none'
    }
})}`
const Content = styled.div<IStateLayout>`${({ layout }) => ({
    position: 'relative',
    height: '100%',
    marginTop: `${layout.headerHeightSize}px;`,
})}`

const Aside: IReactFC = ({ children }) => {
    const layout = useSelector((state: IRootStore) => state.layout.layout);
    return (
        <Wrapper layout={layout}>
            <Content layout={layout}>
                <YScrollWrapper layout={layout}>
                    {children}
                </YScrollWrapper>
            </Content>
        </Wrapper>
    );
}

export default Aside;