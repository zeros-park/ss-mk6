import React from "react";
import styled from 'styled-components';
import YScrollWrapper from "@/content/YScrollWrapper";
import { IReactFC, IStyledLayoutProps } from "@/types/global";

const Wrapper = styled.section<IStyledLayoutProps>`${({ layout }) => ({
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
const Content = styled.div<IStyledLayoutProps>`${({ layout }) => ({
    position: 'relative',
    height: '100%',
    marginTop: `${layout.headerHeightSize}px;`,
})}`

const Aside: IReactFC<IStyledLayoutProps> = ({ layout, children }) => {
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