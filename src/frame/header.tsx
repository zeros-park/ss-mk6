import React, { useState } from "react";
import styled, { CSSObject } from 'styled-components';
import { IReactFC, IStyledLayoutProps } from "@/types/global";

const Wrapper = styled.section<IStyledLayoutProps>`${props => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: `${props.layout.headerHeightSize}px`,
    pointerEvents: 'none',
    overflowX: 'auto',
})}`

const Content = styled.div<IStyledLayoutProps>`${props => ({
    position: 'relative',
    pointerEvents: 'auto',
    marginLeft: `${props.layout.asideLeftSizeOptions.default}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#beb9c8',
})}`
const Header: IReactFC<IStyledLayoutProps> = ({ layout, children }) => {
    return (
        <Wrapper layout={layout}>
            <Content layout={layout}>
                {children}
            </Content>
        </Wrapper>
    )
}

export default Header;