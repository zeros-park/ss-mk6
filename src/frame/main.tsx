import React from "react";
import styled from 'styled-components';
import YScrollWrapper from "@/content/YScrollWrapper";
import { IReactFC, IStyledLayoutProps } from "@/types/global";

const Wrapper = styled.div`
    background-color: #80808036;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const Content = styled.main<IStyledLayoutProps>`
    ${props => (`
        position: relative;
        height: 100%;
        margin-left: ${props.layout.asideLeftSizeOptions.default}px;
        @media screen and (max-width: ${props.layout.mediaWidthOptions.simple}px) {
            margin-left: ${props.layout.asideLeftSizeOptions.simple}px;
        }
        @media screen and (max-width: ${props.layout.mediaWidthOptions.minimal}px) {
            margin-left: 0px;
        }
    `)}
`
const Main: IReactFC<IStyledLayoutProps> = ({ layout, children }) => {
    return (
        <Wrapper className="_main">
            <Content layout={layout}>
                <YScrollWrapper marginTop={layout.headerHeightSize}>
                    {children}
                </YScrollWrapper>
            </Content>
        </Wrapper>
    );
}

export default Main;