import React from "react";
import styled from 'styled-components';
import YScrollWrapper from "@/content/YScrollWrapper";
import { IReactFC, IStyledLayoutProps } from "@/types/global";

const Wrapper = styled.section`${{
    position: "absolute",
    pointerEvents: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
}}`
const Content = styled.main<IStyledLayoutProps>`${({ layout }) => ({
    position: 'relative',
    height: '100%',
    marginLeft: `${layout.asideLeftSizeOptions.default}px`,
    marginTop: `${layout.headerHeightSize}px`,
    [`@media screen and (max-width: ${layout.mediaWidthOptions.simple}px)`]: {
        marginLeft: `${layout.asideLeftSizeOptions.simple}px`
    },
    [`@media screen and (max-width: ${layout.mediaWidthOptions.minimal}px)`]: {
        marginLeft: 0
    }
})}`
const Main: IReactFC<IStyledLayoutProps> = ({ layout, children }) => {
    return (
        <Wrapper>
            <Content layout={layout}>
                <YScrollWrapper layout={layout}>
                    {children}
                </YScrollWrapper>
            </Content>
        </Wrapper>
    );
}

export default Main;