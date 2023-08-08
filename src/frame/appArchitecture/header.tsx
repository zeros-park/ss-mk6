import React from "react";
import styled from 'styled-components';
import { IReactFC } from "@/types/global";
import { dcwStyled } from "@/frame/designComponentWrapper";

const Wrapper = styled.section`${() => dcwStyled(({ layout }) => ({
    default: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${layout.headerHeightSize}px`,
        pointerEvents: 'none',
    }
}))}`
const Content = styled.div`${() => dcwStyled(({ layout }) => ({
    default: {
        position: 'relative',
        pointerEvents: 'auto',
        marginLeft: `${layout.asideLeftSizeOptions.default}px`,
        height: '100%',
    }
}))}`
const Header: IReactFC = ({ children }) => {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

export default Header;