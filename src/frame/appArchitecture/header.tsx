import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import { IStateLayout } from "@/store/slice/frameSlice";

import { useSelector } from "react-redux";
import { IRootStore } from "@/store";

const Wrapper = styled.section<IStateLayout>`${props => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: `${props.layout.headerHeightSize}px`,
    pointerEvents: 'none',
    overflowX: 'auto',
})}`

const Content = styled.div<IStateLayout>`${props => ({
    position: 'relative',
    pointerEvents: 'auto',
    marginLeft: `${props.layout.asideLeftSizeOptions.default}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#beb9c8',
})}`
const Header: IReactFC = ({ children }) => {
    const layout = useSelector((state: IRootStore) => state.layout.layout);
    return (
        <Wrapper layout={layout}>
            <Content layout={layout}>
                {children}
            </Content>
        </Wrapper>
    )
}

export default Header;